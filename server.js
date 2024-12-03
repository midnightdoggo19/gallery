const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 8080;

// Serve static files
app.use(express.static(__dirname));

// API to fetch images
app.get('/api/images', (req, res) => {
  const imageDir = path.join(__dirname, 'images');
  fs.readdir(imageDir, (err, files) => {
    if (err) {
      res.status(500).send('Error reading images directory');
      return;
    }
    const images = files
      .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
      .map(file => `/images/${file}`);
    res.json(images);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
