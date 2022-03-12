// Importing modules
const express = require('express');
const path = require('path');

const app = express();

// app.use(express.json());

// Define paths for Express Configuration
const publicDirectoryPath = path.join(__dirname, 'public');

// Setup Static Directory to serve
app.use(express.static(publicDirectoryPath));  // this becomes our main directory on our local host

// Server call
app.listen(5000, () => {
    console.log('Server is up on port 5000');
})