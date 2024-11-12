const express = require('express');
const router = express.Router();

// Temporary in-memory data for incidents
let incidents = [];

// Get all incidents
router.get('/', (req, res) => {
    res.render('incident_list', { incidents });
});

// Show the form to create a new incident
router.get('/new', (req, res) => {
    res.render('incident_form');
});

// Create a new incident
router.post('/', (req, res) => {
    const newIncident = {
        id: Date.now(),
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority,
        status: 'Open',
        assignedTo: req.body.assignedTo,
    };
    incidents.push(newIncident);
    res.redirect('/incidents');
});

// Update an incident (e.g., change status or priority)
router.post('/update/:id', (req, res) => {
    const id = req.params.id;
    const incident = incidents.find((i) => i.id == id);
    if (incident) {
        incident.status = req.body.status || incident.status;
        incident.priority = req.body.priority || incident.priority;
    }
    res.redirect('/incidents');
});

// Delete an incident
router.post('/delete/:id', (req, res) => {
    incidents = incidents.filter((i) => i.id != req.params.id);
    res.redirect('/incidents');
});

module.exports = router;
