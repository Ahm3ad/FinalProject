// Load installed third-party packages
var express = require('express');
var router = express.Router();

// Render the home page
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
     content: '<p>Welcome to the Car Incident Tracker! Track and manage incidents with ease.</p>'
  });
});

// Redirect '/home' to the root URL to avoid duplication
router.get('/home', function(req, res, next) {
  res.redirect('/');
});

// Render the about page
router.get('/about', function(req, res, next) {
  res.render('index', { 
    title: 'About Us'
  });
});

// Render the projects page
router.get('/projects', function(req, res, next) {
  res.render('index', { 
    title: 'Reported Incidents'
  });
});

// Render the contact page
router.get('/contact', function(req, res, next) {
  res.render('index', { 
    title: 'Contact Us'
  });
});

module.exports = router;
