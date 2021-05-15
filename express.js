// express.js - Express route module
const express = require('express');
var router = express.Router();

router.get('./index.js', function (req, res) {
    res.send('Note taker');
})

router.get('/index.js', function (req, res) {
    res.send('About this note taker');
})

module.exports = router;