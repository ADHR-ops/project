const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('dashboard');
});

router.get('/manage', (req, res) => {
    res.render('shifts');
});

module.exports = router;
