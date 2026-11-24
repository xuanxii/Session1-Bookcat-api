const express = require('express');
const app = express();

// 1. Home route (/)
app.get('/', (req, res) => {
  res.send('Welcome to the Book Category API');
});

// 2. Categories route (/categories)
app.get('/categories', (req, res) => {
  res.json([
    { id: 1, name: 'Fiction' },
    { id: 2, name: 'Non-Fiction' },
    { id: 3, name: 'Biography' }
  ]);
});

// 3. About route (/about)
app.get('/about', (req, res) => {
  res.send('I am a Year 1 Information Technology student at Ngee Ann Polytechnic learning backend development.');
});

// Start server on port 3000
app.listen(3000, () => {
  console.log('Listening on port 3000');
});