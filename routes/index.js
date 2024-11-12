const express = require('express');
const router = express.Router();

// Render the home page
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// Render the about page
router.get('/about', (req, res) => {
    res.render('index', { title: 'About Us' });
});

// Render the projects page
router.get('/projects', (req, res) => {
    res.render('index', { title: 'Reported Incidents' });
});

// Render the contact page
router.get('/contact', (req, res) => {
    res.render('index', { title: 'Contact Us' });
});

router.get('/incidents', (req, res) => {
    res.render('incident_form', { incidents: [] } )});





module.exports = router;
