const express = require('express');
const users = express.Router();

const { getAllUsers, createUser } = require('../Queries/users');

users.get('/', async (req, res) => {
    const allUsers = await getAllUsers();
    if (allUsers[0]) {
        res.status(200).json(allUsers)
    } else {
        res.status(500).json({error: "server error"})
    }
})

users.post('/signup', async (req, res) => {
    const user = await createUser(req.body)

    const {id, username} = user;
    if (user.username && user.id) {
        res.status(200).json({username, id});
    } else {
        res.status(500).json({error: "user not created"});
    }
})

module.exports = users;