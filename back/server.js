const express = require('express');
const path = require('path');
const app = express();

// Configure View Engine to EJS
app.set('view engine', 'ejs');
app.use(express.static('public')); 

// Point views folder directly to front/views
app.set('views', path.join(__dirname, '../front/views'));

// Serve static assets (images, CSS, JS) from front/public
app.use(express.static(path.join(__dirname, '../front/public')));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Direct Route -> Renders home.ejs directly
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/projects', (req, res) => {
  res.render('projects');
});

app.get('/workflow', (req, res) => {
  res.render('workflow');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/enquiry', (req, res) => {
  res.render('enquiry');
});

app.get('/resume', (req, res) => {
  res.render('resume');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

const axios = require('axios'); 
const RENDER_URL = 'https://haidarali-portfolio.onrender.com'; 
setInterval(async () => {
  try {
    await axios.get(RENDER_URL);
    console.log('Self-ping successful: Server kept alive');
  } catch (error) {
    console.error('Self-ping failed:', error.message);
  }
}, 10 * 60 * 1000);