import https from 'https';
import fs from 'fs';
import express from 'express';

const app = express();

// Serve static files from 'dist' folder
app.use(express.static('dist'));

const options = {
  key: fs.readFileSync('pixify-ai.local-key.pem'),
  cert: fs.readFileSync('pixify-ai.local.pem')
};

https.createServer(options, app).listen(443, () => {
  console.log('Pixify-AI running securely at:');
  console.log('https://pixify-ai.local');
});

// Fallback for direct IP access
app.get('/', (req, res) => {
  res.redirect('https://pixify-ai.local');
});
