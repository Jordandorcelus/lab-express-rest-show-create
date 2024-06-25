const express = require('express');
const captain = express.Router();

const captainArray = require('./captain');

captain.get('/', (req, res) => {
    res.json(captainArray);
});


captain.get('/:log', (req, res) => {
    const {logs} = req.params;
    if(logs) {
        res.status(200).json(captainArray[logs]);
    } else {
        res.status(404).json("Page doesn't exist.");
    }
    
});


module.exports = captain;