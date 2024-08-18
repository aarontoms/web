const express = require('express')
const app = express()
const loginRouter = require('./login')
const e = require('express')
const session = require('express-session')

const port = 3020

app.use(session({
    secret: 'super secret',
    resave: false,
    saveUninitialized: true
}))

app.get('/', (req, res) => {
    res.redirect('/home')
})
app.get('/home', (req, res) => {
    res.sendFile('files/home.html', { root: __dirname })
})

app.use('/login', loginRouter)

app.get('/dashboard', (req, res) => {
    if(req.session.authenticated){
        console.log('User is authenticated')
        res.sendFile('files/dashboard.html', { root: __dirname })
    }else{
        console.log('User is not authenticated')
        res.redirect('/login');
    }
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})