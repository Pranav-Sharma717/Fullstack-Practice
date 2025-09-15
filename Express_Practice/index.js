const express = require("express");
const app = express()
console.dir(app)

// app.use((req, res) => {
//     console.log("We got a request!")
//     // res.send('<h1>THIS is MY webpage!</h1>')
// })

// /help => 'Description'
// /Resume => 'Resume'
// '/' => This is the home page!

app.get('/help', (req, res) => {
    console.log('Help request!')
    res.send('HELPP!')
})

app.get('/Resume', (req, res) => {
    console.log('Resume request!')
    res.send('Resume!')
})

app.get('/', (req, res) => {
    console.log('Home page request!!')
    res.send('<h1>Home PAGE!!!</h1>')
})

app.post('/', (req, res) => {
    res.send('POST REQUEST TO HOME PAGE!')
})

app.get('/r/:subreddit', (req, res) => {
    console.log(req.params);
    const { subreddit } = req.params;
    res.send(`<h2>THIS IS A SUBREDDIT OF ${subreddit}!</h2>`)
    console.log("Subreddit request")
})

app.get('/r/:subreddit/:postId', (req, res) => {
    console.log(req.params);
    const { subreddit, postId } = req.params;
    res.send(`<h2>THIS IS A SUBREDDIT OF ${subreddit} with other post ID ${postId}!</h2>`)
    console.log("Subreddit other request")
})

app.get('/search', (req, res) => {
    const { q } = (req.query);
    console.log(req.query);
    res.send(`<h1>result for: ${q}</h1>`)
})

app.listen(8080, () => {
    console.log("Listening on port 8080!")
})  
