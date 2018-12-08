const express  = require('express');
const app      = express();
const port     = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tdd_demo_' + NODE_ENV);

const Todo = require('./models/todo');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/todos', function(req, res) {
  Todo
    .find({})
    .then(function(todos) {
      res.status(200).json(todos);
    })
    .catch(function(err) {
      res.status(500).json({
        message: 'Internal server error'
      });
    });
});

app.post('/todos', function(req, res) {
  Todo
    .create({
      title: req.body.title,
      description: req.body.description,
    })
    .then(function(todo) {
      res.status(201).json(todo);
    })
    .catch(function(err) {
      res.status(500).json({
        message: 'Internal server error'
      });
    });
});

module.exports = app;
