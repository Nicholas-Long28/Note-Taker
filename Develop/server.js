const express = require('express')
const app = express()

const PORT = 4000

app.set('view engine', 'uuid')

app.get(`${__dirname}/index.html`, (req, res) => {
    res.send('Hello World')
})

app.listen(4000)