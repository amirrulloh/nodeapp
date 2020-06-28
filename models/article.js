const mongoose = require('mongoose');

let articleSchema = mongoose.Schema({
    tittle:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
});

let Article = module.exports = mongoose.model('Article', articleSchema);