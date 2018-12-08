const Todo = require('../models/todo');

module.exports = function(done) {
  Todo
    .deleteMany({})
    .then(function() {
      done();
    })
    .catch(function(err) {
      console.log(err);
    });
};
