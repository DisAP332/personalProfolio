const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors')

const db = require('./db')

const app = express();
const apiPort = 8001;

app.use(cors())
app.use(express.json());

db.on('error', console.error.bind(console, "MongoDB connection error:"))

// Begin call of routers //



// End call of routers //

app.listen(apiPort, () => {
    console.log(`Server is running on port ${apiPort}`)
});

module.exports = app;