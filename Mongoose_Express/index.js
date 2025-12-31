const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

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
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index.ejs', { products, category })

    } else {
        const products = await Product.find({})
        res.render('products/index.ejs', { products, category: 'All' })
    }
})

app.get('/products/new', (req, res) => {
    res.render('products/new')
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body)
    await newProduct.save();
    res.redirect('/products')
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product })
})

app.put('/products/:id', async (req, res) => { //Put requests are mainly used for getting full data from the redirection while patch is used to get the partial info
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    res.redirect(`/products/${product._id}`)
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
        return res.status(404).send('Product not found');
    }
    res.redirect('/products');
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