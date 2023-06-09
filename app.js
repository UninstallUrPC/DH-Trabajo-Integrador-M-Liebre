const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/login.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/signup.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});