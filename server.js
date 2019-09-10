const express = require('express');
const port = 3000;

// Express
const app = express();

// Routes
const routes = require('./routes')

app.listen(port, function () {
    console.log("Server is running on " + port + " port");
});

routes(app)

module.exports = app