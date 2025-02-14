import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('user'); // Default role
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/createuser', { 
        name, email, password, role 
      });

      setMessage('Signup Successful! Redirecting...');
      setTimeout(() => {
        navigate('/login'); // Redirect after 2 sec
      }, 2000);
      
    } catch (err) {
      setMessage('Signup failed. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignup} className="signup-form">
        <h2>Sign Up</h2>
        {message && <p className="text-green-500">{message}</p>}
        
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

        {/* Role Selection */}
        <label>Choose Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="traveler">Traveler</option>
        </select>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
