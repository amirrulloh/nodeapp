const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodekb',{useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;

// Check connection
db.once('open', function(){
    console.log('Connected to MongoDB');
});

// Check for db error
db.on('error', function(err){
    console.log(err);
});

// Init App
const app = express();

// Bring in models
let Article = require('./models/article');

// Load view Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.get('/', function (req, res) {
    Article.find({}, function(err, articles){
        if(err){
            console.log(err);
        }else{
            res.render('index', {
                title: 'Articles',
                articles: articles
            });
        }
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