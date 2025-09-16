const express = require('express')
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

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