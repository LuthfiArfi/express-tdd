const Todo = require('../models/todo');

module.exports = function(done) {
  if (process.env.NODE_ENV === 'test') {
    Todo
      .deleteMany({})
      .then(function() {
        done();
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
