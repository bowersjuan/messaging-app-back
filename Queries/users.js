const db = require('../db/config');
const bcrypt = require("bcrypt")
// https://www.npmjs.com/package/bcrypt
// packaged used to encrypt a password so it is unintelligible in the database
const saltRounds = 10;

const getAllUsers = async () => {
  try {
    const allUsers = await db.any('SELECT * FROM users');
    return allUsers;
  } catch (error) {
    return error;
  }
};

const getOneUser = async (id) => {
  try {
    const user = await db.one('SELECT * FROM users WHERE id=$1', id);
  } catch (error) {
    return error
  }
}

//SIGNUP
const createUser = async (user) => {
  const {username, password} = user;
  try {
    // Salt Password
    // Salting adds a string of 32 or more characters to passwords and hashes them
    // Prevents hackers from reverse engineering data
    const salt = await bcrypt.genSalt(saltRounds)

    // Hash Password
    // Turns salted password in a short string of characters using an encryption algorithm
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = await db.one(
      'INSERT INTO users (username, password) values($1, $2) RETURNING *', [username, hashedPassword]
    );
    if (newUser) {
      return newUser
    }
  } catch(error) {
    return error
  }
}

// LOGIN
const loginUser = async (user) => {
  const {password, username} = user;
  try {
    const oneUser = await db.one('SELECT * FROM users WHERE username=$1', username);

    if (oneUser) {
      // RETURNS TRUE OR FALSE
      const foundUser = await bcrypt.compare(password, oneUser.password)

      if (foundUser) {
        const {username, id} = oneUser
        return {username, id}
      }
    }

  } catch (error) {
    return error
  }
}

const addNewMessageToUser = async (userId, messageId) => {
  try {
    // RETURNS TRUE or NULL
    const add = await db.none(
      'INSERT INTO users_bookmarks (user_id, bookmark_id) VALUES ($1, $2)', [userId, messageId]
    );
    return !add;

  } catch (error) {
    return error
  }
}

const deleteUser = async (id) => {
  try {
    const deletedUser = await db.one('DELETE FROM users WHERE id=$1 RETURNING *', id)

    if (deleteUser) {
      return {
        username: deletedUser.username
      };
    }
  } catch (error) {
    return error
  }
}

module.exports = { getAllUsers, getOneUser, createUser, loginUser, addNewMessageToUser, deleteUser };
