const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'frontends')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/auth', require('./netlify/functions/auth'));
app.use('/dashboard', require('./netlify/functions/dashboard'));

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
