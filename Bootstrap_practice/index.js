const express = require('express');
const app = express();
const path = require('path')
const redditData = require('./data.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home.ejs')
    console.log('Home page request')
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { rand: num })
    console.log('Random number request');
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit })
    }
    console.log('reddit request')
})
app.get('/cats', (req, res) => {
    const cats = ['Blue', 'Rocket', 'Groot', 'Red']
    res.render('cats', { cats })
    console.log('Cat request')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})