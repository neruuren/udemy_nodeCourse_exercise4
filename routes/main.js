const express = require('express');

const router = express.Router();

const users = [];

router.post('/add-user',(req, res, next) => {   
    users.push({name: req.body.name});
    res.redirect('/users');
});

router.get('/users', (req, res, next) => {
    res.render('users', {
        users: users,
        pageTitle: 'Users',
    });
});

router.get('/', (req, res, next) => {
    res.render('addUser', {
        pageTitle: 'Add User',
    });
});

module.exports = router;
