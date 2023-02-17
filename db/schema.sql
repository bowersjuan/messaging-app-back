DROP DATABASE IF EXISTS messages_dev;
CREATE DATABASE messages_dev;

\c messages_dev;

DROP TABLE IF EXISTS messages;
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    message TEXT NOT NULL,
    favorite BOOLEAN,
    time_sent TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    image TEXT DEFAULT 'https://fakeface.rest/thumb/view?minimum_age=21&maximum_age=40'
);

-- look up table
DROP TABLE IF EXISTS users_messages;
CREATE TABLE users_messages (
    id SERIAL PRIMARY KEY,
    message_id INT,
    user_id INT,
    created TIMESTAMP WITH TIME ZONE
);