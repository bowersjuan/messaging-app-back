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

module.exports = { getAllUsers, getOneUser, createUser, deleteUser };
