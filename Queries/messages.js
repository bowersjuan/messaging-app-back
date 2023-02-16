const db = require('../db/config');

// GET ALL MESSAGES
const getAllMessages = async () => {
  try {
    const allMessages = await db.any('SELECT * FROM messages');
    return allMessages;
  } catch (error) {
    return error;
  }
};

// GET ONE MESSAGE
const getOneMessages = async (id) => {
  try {
    const message = await db.one('SELECT * FROM messages WHERE id=$1', id);
    return message;
  } catch (error) {
    return error;
  }
};

// CREATE MESSAGE
const createMessage = async (message) => {
  try {
    const newMessage = await db.one('INSERT INTO messages (message, favorite, sender, receiver) VALUES ($1, $2, $3, $4) RETURNING *', [message.message, message.favorite, message.sender, message.receiver]);
    return newMessage;
  }
  catch(error) {
    return error
  };
}

// DELETE MESSAGE
const deleteMessage = async (id) => {
  try {
    const deletedMessage = await db.one('DELETE FROM messages WHERE id=$1 RETURNING *', id)
    return deletedMessage;
  } catch (error) {
    return error
  }
}

// UPDATE MESSAGE
const updateMessage = async (id, message) => {
  try {
    const updatedMessage = await db.one('UPDATE messages SET message=$1, favorite=$2, sender=$3, receiver=$4 WHERe id=$5 RETURNING *', [message.message, message.favorite, message.sender, message.receiver], id)
    return updatedMessage;
  } catch (error) {
    return error
  }
}

module.exports = { getAllMessages, getOneMessages, createMessage, deleteMessage, updateMessage };
