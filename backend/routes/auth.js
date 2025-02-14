const express = require('express');
const User=require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const JWT_SECRET='Hanzalaisyourdaddy'


//Create a User using POST "/api/auth/createuser". Does not require AUTH
router.post('/createuser',
    [
        body('name', 'Enter a valid name').isLength({ min: 3 }),
        body('email', 'Enter a valid email').isEmail(),
        body('password', 'Password must be at least 5 characters.').isLength({ min: 5 }),
        body('role', 'Invalid role').isIn(['user', 'traveler','admin']) 
    ]
    ,async(req,res)=>{
    //If there are errors,return Bad request and the errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array() });
    }
    
    //Check wether the user with this email exists already
    try{
    let user = await User.findOne({email:req.body.email})
    if (user){
        return res.status(400).json({error:"Sorry a user with this email already exists"})
    }
    const salt =await bcrypt.genSalt(10)
    secPass=await bcrypt.hash( req.body.password,salt)
    user = await User.create({
        name:req.body.name,
        password:secPass,
        email:req.body.email,
        role: req.body.role
    })

    const data={
        user:{
            id:user.id,
            role: user.role
        }
    }
    const authToken = jwt.sign(data, JWT_SECRET);
    res.json({authToken , role: user.role})

    }catch(error){
        console.error(error.message,req.body.role)
        res.status(500).send("Some Error occured .")
    }
})


// ROUTE2: Authenticate a user using: POST "/api/auth/login". No login required
router.post('/login',
    [
        body('email', 'Enter a valid email').isEmail(),
        body('password', 'Password cannot be blank.').exists(),
    ]
    ,async(req,res)=>{
        //If there are errors,return Bad request and the errors.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors:errors.array() });
        }
        const {email,password}=req.body
        try {
            let user = await User.findOne({email})

            if (!user){
                return res.status(400).json({error:"Please try to login with correct credentials."})
            }
            const passwordCompare=await bcrypt.compare(password,user.password)
            if (!passwordCompare) {
                return res.status(400).json({error: 'Invalid credentials, please try again.' });
            }
            const data={
                user:{
                    id:user.id,
                    role: user.role,
                }
            }
            // const authToken = jwt.sign(data, JWT_SECRET, { expiresIn: '7d' });

            // // Send user data excluding password
            // const { password: _, ...userData } = user.toObject();
            // res.json({ authToken, user: userData });
            res.json(user)
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Internal Server Error ")
        }
    })


// ROUTE3: Get logged in user details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser, async (req, res) => {
    try {
      const userId = req.user.id; // Ensure userId is declared with 'const' or 'let'
      const user = await User.findById(userId).select('-password');
      res.send(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal server error');
    }
  });
module.exports=router