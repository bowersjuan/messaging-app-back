const db = require("../db/config");

const getAllMessages = async () => {
  try {
    const allMessages = await db.any("SELECT * FROM messages");
    return allMessages;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllMessages };
