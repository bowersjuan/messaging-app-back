const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const messagesController = require('./Controllers/messagesController');
const usersController = require('./Controllers/usersController')

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('App running...');
});

app.use('/messages', messagesController);

app.use('/users', usersController)

app.get('*', (req, res) => {
  res.status(404).json({ error: 'page not found' });
});

module.exports = app;
