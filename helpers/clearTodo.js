const Todo = require('../models/todo');

module.exports = function() {
  return Todo.deleteMany({});
};
