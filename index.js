'use strict';
const http = require('http');

const hostname = '127.0.0.1';
const port = 3333

const express = require('express');
const app = express();


const server = http.createServer(app);
const db = require('./db');

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
    //this lets us know the server is running
});

//Controllers are sent to their specific file friends.js and index.js in the routes folder
const rootController = require('./routes/index');
const friendsController = require('./routes/friends');

app.use('/', rootController); // ROOT route
app.use('/friends', friendsController); // Friends route
//encapsulated in their own file
//deviation from the learning portal but we will need this until graduation