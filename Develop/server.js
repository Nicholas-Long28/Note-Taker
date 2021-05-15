const express = require('express')
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 4000;
/*var router = express.Router();

router.get('./index.js', function (req, res) {
    res.send('Note taker');
})

router.get('/index.js', function (req, res) {
    res.send('About this note taker');
})

module.exports = router;*/


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
/*app.use('/index', express);
app.set('view engine', 'uuid')*/


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

app.listen(PORT, function() {
    console.log('App listening on PORT:' + PORT);
});

