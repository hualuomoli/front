var app = require('../app');
var request = require('supertest').agent(app.listen());
// var assert = require('assert');

describe('user routes', function () {

  // describe('with valid credentials', function () {
  //   it('should call the next middleware', function (done) {
  //     request
  //       .post('/user/login')
  //       .send('username=hualuadminomoli&password=')
  //       .expect(200)
  //       .expect('login success', done);
  //   })
  // });

  describe('get user message', function () {
    it('should get user list ', function (done) {
      request
        .get('/user')
        .expect(200, done);
    })
  });

  describe('login', function () {
    it('should login without data', function (done) {
      request
        .post('/user/login')
        .expect(200)
        .expect({
          "code": "9",
          "msg": "no user"
        }, done);
    });

    it('should login with invalid data', function (done) {
      request
        .post('/user/login')
        .send({
          username: 'invalid username'
        })
        .expect(200)
        .expect({
          "code": "8",
          "msg": "username or password error"
        }, done);
    })

    it('should login with json data', function (done) {
      request
        .post('/user/login')
        .send({
          username: 'manager'
        })
        .expect(200)
        .expect({
          "code": "0",
          "msg": "success"
        }, done);
    })

    it('should login with urlencoded data', function (done) {
      request
        .post('/user/login')
        .send('username=manager')
        .expect(200)
        .expect({
          "code": "0",
          "msg": "success"
        }, done);
    })


  });

});