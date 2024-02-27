import express from 'express'
const app = express()
app.get('/', (req, res) => {
    res.send('Server started')
})
const jokes = [
    {
        id: 1,
        title: 'Joke One',
        content: 'This is joke one',
        context: function () {
            console.log("hi ")
        }
    },
    {
        id: 2,
        title: 'Joke Two',
        content:'This is joke two'
    },
    {
        id: 3,
        title: 'Joke Three',
        content:'This is joke three'
    },
    {
        id: 4,
        title: 'Joke Four',
        content:'This is joke four'
    },
    {
        id: 5,
        title: 'Joke Five',
        content:'This is joke five'
    }
]
app.get('/api/jokes', (req, res) => {
    res.send(jokes)
})
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})