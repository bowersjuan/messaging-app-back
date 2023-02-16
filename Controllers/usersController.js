const express = require('express');
const users = express.Router();

const { getAllUsers, getOneUser, createUser, loginUser, addNewMessageToUser, getAllMessagesForUser, deleteUser } = require('../Queries/users');

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

// SIGNUP
users.post('/signup', async (req, res) => {
    const user = await createUser(req.body)

    const {id, username} = user;
    if (user.username && user.id) {
        res.status(200).json({username, id});
    } else {
        res.status(500).json({error: "user not created"});
    }
})

// LOGIN
users.post('/login', async (req, res) => {
    const user = await loginUser(req.body);
    if (user.username) {
        const {id, username} = user;
        res.json({message: "Login successful", id, username})
    } else {
        res.json({message: "User not found"})
    }
})

// GET MESSAGES BY USER
users.get('/:userId/messages', async (req, res) => {
    const {userId} = req.params;
    const userMessages = await getAllMessagesForUser(userId)
    if (userMessages) {
        res.status(200).json(userMessages)
    } else res.status(500).json({error: "Messages not found"})
})

// POST MESSAGE FOR USER
users.post('/:userId/messages/:messageId', async (req, res) => {
    const {userId, messageId} = req.params;
    const succesfulAdd = addNewMessageToUser(userId, messageId)
    if (succesfulAdd) {
        res.status(201).json({message: "Message added"})
    } else {
        res.json({error: "Message not added"})
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