const express = require('express');
const path = require('path');

// Init App
const app = express();

// Load view Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Server
// app.get('/', (req, res) => res.send('Hello World!'));

app.get('/', function (req, res) {
    let articles = [
        {
            id: 1,
            title: 'Article One',
            author: 'Amir',
            body: 'This is article one'
        },
        {
            id: 2,
            title: 'Article Two',
            author: 'Amir',
            body: 'This is article Two'
        },
        {
            id: 3,
            title: 'Article Three',
            author: 'Amir',
            body: 'This is article Three'
        }
    ];
    res.render('index', {
    title: 'Articles',
    articles: articles
    });
});


// Add Article
app.get('/articles/add', function (req, res) {
    res.render('add_article', {
    title: 'Add Article'
    });
});


// Start Server
app.listen(3000, function(){
    console.log('Server started on port 3000...');
});