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
    res.render('index', { incidents: [] } )});

router.get('/incidents/new',(req,res ) => {
    res.render('index', { incidents: [
        { id: 1, title: 'Car Accident', description: 'A driver was involved in a car accident.', priority: 'High', status: 'Open', assignedTo: 'John Doe' },
        { id: 2, title: 'Fire in Building', description: 'A fire occurred in a building.', priority: 'Medium', status: 'Closed', assignedTo: 'Jane Smith' },
        { id: 3, title: 'Water Damage', description: 'A water leak occurred in a building.', priority: 'Low', status: 'Open', assignedTo: 'Michael Johnson' },
    ] } )});






module.exports = router;
