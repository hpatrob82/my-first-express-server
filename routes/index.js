'use strict';
const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello from Express!");
});

router.get('/friends', (req, res) => {
    res.send(`
    <ul>
    <li>Finley</li>
    <li>Skyler</li>
    <li>Lennon</li>
    <li>Charlie</li>
    </ul>
    `);
});

module.exports = router;