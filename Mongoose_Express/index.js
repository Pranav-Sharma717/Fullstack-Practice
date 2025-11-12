const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo connection open')
    })
    .catch(err => {
        console.log("Errororr")
        console.log(err)
    })
app.set('view', path.join(__dirname, 'views'));
app.set('view engien', 'ejs');

app.get('/dog', (req, res) => {
    res.send('WOOF!')
})
app.listen(3000, () => {
    console.log("Listening on 3000");
})