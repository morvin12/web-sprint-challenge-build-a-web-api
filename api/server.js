const express = require('express');
const server = express();

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!
server.use(express.json())


server.get('/', (req, res) => {
    res.send(`<h1>It works!</h1>`)
});

module.exports = server;
