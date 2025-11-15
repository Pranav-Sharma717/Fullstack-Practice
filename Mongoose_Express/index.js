const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo connection open')
    })
    .catch(err => {
        console.log("Errororr")
        console.log(err)
    })
app.set('view', path.join(__dirname, 'views'));
app.set('view engien', 'ejs');

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index.ejs', { products })
})


app.listen(3000, () => {
    console.log("Listening on 3000");
})