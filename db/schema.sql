DROP DATABASE IF EXISTS messages_dev;
CREATE DATABASE messages_dev;

\c messages_dev;

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    message TEXT NOT NULL,
    favorite BOOLEAN,
    sender INT,
    receiver INT,
    timeSent TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    image TEXT DEFAULT 'https://thispersondoesnotexist.com/',
    password VARCHAR(5)
)