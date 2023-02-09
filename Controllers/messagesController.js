const express = require('express');
const messages = express.Router();

const { getAllMessages } = require('../Queries/messages');

messages.get('/', async (req, res) => {
  const allMessages = await getAllMessages();
  if (allMessages[0]) {
    res.status(200).json(allMessages);
  } else res.status(500).json({ error: allMessages.message });
});

module.exports = messages;
