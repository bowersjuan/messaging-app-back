const express = require('express');
const users = express.Router();

const { getAllUsers, getOneUser, createUser, deleteUser } = require('../Queries/users');

users.get('/', async (req, res) => {
    const allUsers = await getAllUsers();
    if (allUsers[0]) {
        res.status(200).json(allUsers)
    } else {
        res.status(500).json({error: "server error"})
    }
})

users.get('/:id', async (req, res) => {
    const {id} = req.params;
    const user = await getOneUser(id);
    if (user) {
        res.status(200).json(user)
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

users.delete('/:id', async (req, res) => {
    const {id} = req.params;
    const deletedUser = await deleteUser(id);
    if (deletedUser) {
        res.status(200).json(usdeletedUserer)
    } else {
        res.status(500).json({error: "server error"})
    }
})

module.exports = users;