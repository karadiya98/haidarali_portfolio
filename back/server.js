const express = require('express');
const path = require('path');
const app = express();

// Configure View Engine to EJS
app.set('view engine', 'ejs');

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

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});