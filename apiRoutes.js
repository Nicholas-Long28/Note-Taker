const inputData = require('../db');
const newTitle = require('../db');
const newText = require('../db');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        fs.readFile('./db')
        res.json(noteText)
    });
    

    app.post('/api/notes', (req,res) => {
        fs.writeFile('./db.json')
        const newText = req.body;
        noteText.push(req.body);
    });
}