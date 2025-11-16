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
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index.ejs', { products })
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const found = await Product.findById(id);
    console.log(found);
    res.render('products/show', { found })
})


app.listen(3000, () => {
    console.log("Listening on 3000");
})