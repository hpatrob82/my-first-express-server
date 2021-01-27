'use strict';
const express = require('express'),
    router = express.Router();

const friendsArray = require('../db');

router.get('/friends', (req, res) => {
    res.send('This will be the friends list');
    let htmlData = `<ul>`;
    for (let friend of db) {
        htmlData += `<li>${friend.name}</li>`;
    }

    htmlData += `</ul>`;
    res.send(htmlData);

});



module.exports = router;