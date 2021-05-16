const path = require('path');

module.exports = (app) => {

    app.get('/notes', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get('/db', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('/db', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/assets/js/index.js'));
    });
}