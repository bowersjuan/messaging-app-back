const express = require('express');
const messages = express.Router();

const { getAllMessages, getOneMessages, createMessage, deleteMessage, updateMessage } = require('../Queries/messages');

messages.get('/', async (req, res) => {
  const allMessages = await getAllMessages();
  if (allMessages[0]) {
    res.status(200).json(allMessages);
  } else res.status(500).json({ error: "server error"});
});

messages.get('/:id', async (req, res) => {
  const {id} = req.params;
  const message = await getOneMessages(id)
  if (message.id) {
    res.status(200).json(message)
  } else res.status(404).json({error: "message not found"})
})

messages.post('/', async (req, res) => {
  try {
    const newMessage = await createMessage(req.body)
    res.status(200).json(newMessage)
  } catch(error) {
    res.status(500).json({error: "message not created"})
  }
})

messages.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMessage = await deleteMessage(id)
    res.status(200).json(deletedMessage)
  } catch (error) {
    res.status(500).json({error: "id not found"})
  }
})

messages.put('/:id', async (req, res) => {
  const { id } = req.params; 
  try {
    const updatedMessage = await updateMessage(id, req.body)
    res.status(200).json(updatedMessage)
  } catch (error) {
    res.status(500).json({error: "failed to update message"})
  }
})

module.exports = messages;
