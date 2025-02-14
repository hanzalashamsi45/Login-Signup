const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

connectToMongo();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Use authentication routes
app.use('/api/auth', require('./routes/auth'));

// Use the hotel routes
// app.use('/api/hotels', require('./routes/hotels'));  // Ensure this is correct

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
