const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/moviesdb')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log('Connection open')
})

//Defining a schema

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

//Making a collection in Mongo
const Movie = mongoose.model('Movie', movieSchema);
//New instance og a DB:
const Endgame = new Movie({
    title: 'Avengers Endgame',
    year: 2019,
    score: 8.4,
    rating: 'PG13'
});
