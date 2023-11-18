
const express = require('express');
const app = express();
const port = 3000; // Replace with your desired port

app.use(express.json());

// Define routes
app.get('/api/count', (req, res) => {
  // Handle counting logic here
});

app.get('/api/github-link', (req, res) => {
  // Handle GitHub link logic here
});

app.get('/api/products', (req, res) => {
  // Handle product search logic here
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});