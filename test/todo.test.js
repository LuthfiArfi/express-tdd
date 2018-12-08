const chai      = require('chai'),
      chaiHttp  = require('chai-http'),
      expect    = chai.expect,
      app       = require('../app')
      clearTodo = require('../helpers/clearTodo');

chai.use(chaiHttp);

before(function(done) {
  clearTodo(done)
});

after(function(done) {
  clearTodo(done);
});

describe('Todo tests', function() {

  describe('GET /todos', function() {
    it('should send an array with 200 status code', function(done) {
      chai
        .request(app)
        .get('/todos')
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });

  describe('POST /todos', function() {
    it('should send an object of inserted todo with 201 status code', function(done) {
      const newTodo = {
        title: 'Learn TDD',
        description: 'TDD is fun!'
      };
      chai
        .request(app)
        .post('/todos')
        .send(newTodo)
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('_id');
          expect(res.body).to.have.property('title');
          expect(res.body).to.have.property('description');
          expect(res.body.title).to.equal(newTodo.title);
          expect(res.body.description).to.equal(newTodo.description);
          done();
        });
    });
  });

});
