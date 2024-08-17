const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

router.use((req, res, next) => {
    req.session.authenticated = false;
    next();
})

router.get('/', (req, res) => {
    res.sendFile('files/login.html', { root: __dirname });
})

router.post('/', (req, res) => {
    if (req.body.username === 'admin' && req.body.password === 'admin') {
        console.log('Logged in at Time:', Date.now());
        req.session.authenticated = true;
        res.redirect('/dashboard');
    } else {
        console.log('Login failed at:', Date.now());
        req.session.authenticated = false;
        res.sendFile('files/login.html', { root: __dirname })
    }
})

module.exports = router