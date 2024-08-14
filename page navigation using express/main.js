const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.sendFile("files/index.html", {root: __dirname})
})

app.get('/login', (req, res) =>{
    res.sendFile("files/login.html", {root: __dirname})
})

app.get('/football', (req, res) =>{
    res.sendFile("files/football.html", {root: __dirname})
})

app.get('/pizza', (req, res) =>{
    res.sendFile("files/pizza.html", {root: __dirname})
})

app.listen(port, () => console.log(`Server started on  http://localhost:${port}`))