const express = require('express');
const { userInfo } = require('os');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


const comments = [{
    username: 'Tony',
    comment: 'I am Iron man'
},
{
    username: 'Steve',
    comment: 'I dont care'
},
{
    username: 'Skyler',
    comment: 'Dont be in Danger'
},
{
    username: 'Walter',
    comment: 'I am the DANGER!'
}]

app.get('/comments', (req, res) => {
    res.render('comments/allcomments', { comments })
    console.log("Sent succesfully!")
})


app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    console.log(req.body);
    const { food, qty } = req.body;
    res.send(`Okay! ${qty} ${food} comming right up!`)
})

app.listen(3000, () => {
    console.log("On port 3000")
})