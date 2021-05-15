//const express = require('express')
const app = express()
const fs = require('fs');
const path = require('path');
/*var router = express.Router();

router.get('./index.js', function (req, res) {
    res.send('Note taker');
})

router.get('/index.js', function (req, res) {
    res.send('About this note taker');
})

module.exports = router;*/

const app = express();
const PORT = process.env.PORT || 4000;

var express = require('./index.js');
app.use('/index', express);
app.set('view engine', 'uuid')

app.get(`${__dirname}/index.html`, (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, function() {
    console.log('App listening on PORT:' + PORT);
});