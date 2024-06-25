const express = require('express');

const captainController = require('./controllers/captainController');

const app = express();

app.use(express.json());

app.use('/captain', captainController);

app.get('/', (req, res) => {
    res.send("welcome to captain's logs.")
})


module.exports = app;