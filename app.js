const express = require('express');
const path = require('path');

// Init App
const app = express();
const port = 3000

// Load view Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

// Home Server
// app.get('/', (req, res) => res.send('Hello World!'));
app.get('/', (req, res) => res.render('index', {
    title: 'Heloo'
}));

// Start Server
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));