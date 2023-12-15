const express = require('express');
const router = express.Router();

// Dummy data for illustration
let users = [];

// Root path handler
router.get('/', (req, res) => {
    // Redirect to the login page
    res.redirect('/login');
    // Or render a home page if you have one
    // res.render('index');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res) => {
    // Login logic here
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res) => {
    // Registration logic here
});

module.exports = router;
