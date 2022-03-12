// Importing modules
const express = require('express');
const path = require('path');
const fs = require('fs');
// const data = require('./data/data');

const app = express();

app.use(express.json());

// Define paths for Express Configuration
const publicDirectoryPath = path.join(__dirname, 'public');

// Setup Static Directory to serve
app.use(express.static(publicDirectoryPath));  // this becomes our main directory on our local host

// console.log(data.loadNotes());

console.log(fs.readFileSync(userData.json));

// Server call
// app.listen(5000, () => {
//     console.log('Server is up on port 5000');
// })