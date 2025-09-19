const express = require('express');
const { userInfo } = require('os');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
// uuidv4(); // Remove or use this where you need to generate a UUID

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


const comments = [{
    id: uuidv4(),
    username: 'Tony',
    comment: 'I am Iron man'
},
{
    id: uuidv4(),
    username: 'Steve',
    comment: 'I dont care'
},
{
    id: uuidv4(),
    username: 'Skyler',
    comment: 'Dont be in Danger'
},
{
    id: uuidv4(),
    username: 'Walter',
    comment: 'I am the DANGER!'
}]

app.get('/comments', (req, res) => {
    res.render('comments/allcomments', { comments })
    console.log("Sent succesfully!")
})

// Creation of new comments
app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuidv4() })
    res.redirect('/comments')
})

// finding tweets with id(read operation)
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const trimmedId = String(id).trim();
    // console.log('Show route param id:', id);
    // console.log('Trimmed id:', trimmedId);
    // console.log('Available comment ids:', comments.map(c => c.id));
    const foundComment = comments.find(c => String(c.id) === trimmedId);
    if (!foundComment) {
        return res.status(404).send('Comment not found');
    }
    res.render('comments/show', { comment: foundComment })
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    console.log(req.body);
    const { food, qty } = req.body;
    res.send(`Okay! ${qty} ${food} comming right up!`)
})

//Updation:
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const trimmedId = String(id).trim();
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => String(c.id) === trimmedId);
    if (!foundComment) {
        return res.status(404).send('Comment not found');
    }
    if (typeof newCommentText !== 'string' || newCommentText.trim() === '') {
        return res.status(400).send('Field "comment" is required');
    }
    foundComment.comment = newCommentText;
    return res.json(foundComment);
})

//Updation Using a form 
app.get('/comments/:id/edit', (req, res) => {
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })

})


app.listen(3000, () => {
    console.log("On port 3000")
})