const product = require('./models/product');
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

// const p = new product({
//     name: 'Paneer',
//     price: 30,
//     category: 'dairy'
// })
// p.save().then(p => {
//     console.log(p)
// })
//     .catch(e => {
//         console.log(e)
//     }) 
const seedProduct = [
    { name: 'Apple', price: 1.99, category: 'fruit' },
    { name: 'Banana', price: 0.99, category: 'fruit' },
    { name: 'Broccoli', price: 2.49, category: 'vegetable' },
    { name: 'Carrot', price: 1.49, category: 'vegetable' },
    { name: 'Milk', price: 3.99, category: 'dairy' },
    { name: 'Cheese', price: 5.99, category: 'dairy' }
]
Product.insertMany(seedProduct)
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(err)
    })