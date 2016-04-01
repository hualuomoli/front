var app = require('../app');
var request = require('supertest').agent(app.listen());
var assert = require('assert');

describe('use mocha test nodejs', function () {

  describe('response type', function () {
    it('should response text/plain type ', function (done) {
      request
        .get('/demo/type/txt')
        .expect(200)
        .expect("ok", done);
    })

    it('should response text content equal ok ', function (done) {
      request
        .get('/demo/type/txt')
        .expect(200, function (req, res) {
          assert.equal(res.text, 'ok');
          done();
        });
    })

    it('should response application/json type ', function (done) {
      request
        .get('/demo/type/json')
        .expect(200)
        .expect({
          "msg": "ok"
        }, done);
    })

    it('should response json msg equal ok ', function (done) {
      request
        .get('/demo/type/json')
        .expect(200, function (req, res) {
          assert.equal(res.body.msg, 'ok');
          done();
        });
    })

  });

  describe('send parameter by get method', function () {

    // it('should send param in url', function (done) {
    //   request
    //     .get('/demo/parameter?username=manager&nickname=管理员')
    //     .set('Accept', 'text/plain')
    //     .expect(200)
    //     .expect('ok', done);
    // });

    it('should send param in text', function (done) {
      request
        .get('/demo/parameter')
        .set('Accept', 'text')
        .send('username=manager&nickname=管理员')
        .expect(200)
        .expect('ok', done);
    });

    it('should send param in urlencoded', function (done) {
      request
        .get('/demo/parameter')
        .set('Accept', 'application/json')
        .send('username=manager&nickname=管理员')
        .expect(200)
        .expect('ok', done);
    });



  });

  describe('send parameter by post method', function () {

    it('should send param by json', function (done) {
      request
        .post('/demo/parameter')
        .send({
          "username": "manager",
          "nickname": "管理员"
        })
        .expect(200)
        .expect('ok', done);
    });

    it('should send param by urlencoded', function (done) {
      request
        .post('/demo/parameter')
        .send("username=manager&nickname=管理员")
        .expect(200)
        .expect('ok', done);
    });

  });



});