const express = require('express')
const fs = require('fs');
const path = require('path');
const app = express();
const uuid = require('uuid');
const PORT = process.env.PORT || 4000;
/*var router = express.Router();

router.get('./index.js', function (req, res) {
    res.send('Note taker');
})

router.get('/index.js', function (req, res) {
    res.send('About this note taker');
})

module.exports = router;*/


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/index', express);
app.set('view engine', 'uuid')


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
app.get('/api/notes/'), (req, res) => res.sendFile(path.join(__dirname, 'public/assets/db.json'));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/notes.html')));

app.listen(PORT, function() {
    console.log('App listening on PORT:' + PORT);
});


app.route("/api/notes")
    .get(function (req, res) {
        res.json(database);
    })

    .post(function (req, res) {
        let jsonFilePath = path.join(__dirname, "/db/db.json");
        let newNote = req.body;
        database.push(newNote)

        fs.writeFile(jsonFilePath, JSON.stringify(database), function (err) {

            if (err) {
                return console.log(err);
            }
            console.log("Your note was saved!");
        }); 
        res.json(newNote);
    });


app.delete("/api/notes/:id", function (req, res) {
    let jsonFilePath = path.join(__dirname, "/db/db.json");
    for (let i = 0; i < database.length; i++) {

        if (database[i].id == req.params.id) {
            database.splice(i, 1);
            break;
        }
    }
   
    fs.writeFileSync(jsonFilePath, JSON.stringify(database), function (err) {

        if (err) {
            return console.log(err);
        } else {
            console.log("Your note was deleted!");
        }
    });
    res.json(database);
});

app.get('/api/notes', (req, res) => {
    fs.readFile('public/assets/db.json', function read(err, data){
        if (err) {
            throw err;
        }
    }
    ,res.json({}));
});


app.post('/api/notes', (req,res) => {
    fs.writeFile('public/assets/db.json', returnedObject, err => {
        if (err) {
            throw err;
        }
    }
    ,res.json({}));
});

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
  
