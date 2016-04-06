var app = require('../app');
var request = require('supertest').agent(app.listen());
var assert = require('assert');

describe('test server response parameter and body', function () {

  // response type
  describe('test server response type', function () {

    it('should response text/plain ', function (done) {
      request
        .get('/demo/res/txt')
        .expect(200)
        .expect('Content-Type', 'text/plain; charset=utf-8')
        .expect(function (res) {
          assert.equal(res.text, 'ok');
        })
        .expect("ok", done);
    })

    it('should response application/json ', function (done) {
      request
        .get('/demo/res/json')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(function (res) {
          assert.equal(res.body.msg, 'ok');
        })
        .end(done);
    })

    it('should response application/xml ', function (done) {
      request
        .get('/demo/res/xml')
        .expect(200)
        .expect('Content-Type', 'application/xml; charset=utf-8')
        .expect('<root><username>admin</username><token>123456</token></root>', done);
    })

  });


  // send parameter by get method
  describe('test get method', function () {

    it('shold send parameter by json', function (done) {
      request
        .get('/demo/query')
        .query({
          username: 'admin',
          token: '1234567890',
          address: {
            code: '370203',
            home: '山东省青岛市市北区'
          }
        })
        .expect(200)
        .expect(function (res) {
          assert.equal(res.body.username, 'admin');
          assert.equal(res.body.token, '1234567890');
          assert.equal(res.body.address.code, '370203');
          assert.equal(res.body.address.home, '山东省青岛市市北区');
        })
        .end(done);
    });

    it('shold send parameter by urlencoded', function (done) {
      request
        .get('/demo/query')
        .query('username=admin&token=1234567890&address[code]=370203&address[home]=' + encodeURIComponent('山东省青岛市市北区'))
        .expect(200)
        .expect(function (res) {
          assert.equal(res.body.username, 'admin');
          assert.equal(res.body.token, '1234567890');
          assert.equal(res.body.address.code, '370203');
          assert.equal(res.body.address.home, '山东省青岛市市北区');
        })
        .end(done);
    });

    it('shold send parameter by parameter array', function (done) {
      request
        .get('/demo/query')
        .query('username=admin')
        .query('token=1234567890')
        .query('address[code]=370203')
        .query('&address[home]=' + encodeURIComponent('山东省青岛市市北区'))
        .expect(200)
        .expect(function (res) {
          assert.equal(res.body.username, 'admin');
          assert.equal(res.body.token, '1234567890');
          assert.equal(res.body.address.code, '370203');
          assert.equal(res.body.address.home, '山东省青岛市市北区');
        })
        .end(done);
    });

  });

  // send parameter by post method
  describe('test post method', function () {

    it('shold send parameter by json', function (done) {
      request
        .post('/demo/post')
        .send({
          username: 'admin',
          token: '1234567890',
          address: {
            code: '370203',
            home: '山东省青岛市市北区'
          }
        })
        .expect(200)
        .expect(function (res) {
          assert.equal(res.body.username, 'admin');
          assert.equal(res.body.token, '1234567890');
          assert.equal(res.body.address.code, '370203');
          assert.equal(res.body.address.home, '山东省青岛市市北区');
        })
        .end(done);
    });

    it('shold send parameter by urlencoded', function (done) {
      request
        .post('/demo/post')
        .send('username=admin&token=1234567890&address[code]=370203&address[home]=山东省青岛市市北区')
        .expect(200)
        .expect(function (res) {
          assert.equal(res.body.username, 'admin');
          assert.equal(res.body.token, '1234567890');
          assert.equal(res.body.address.code, '370203');
          assert.equal(res.body.address.home, '山东省青岛市市北区');
        })
        .end(done);
    });

    it('shold send parameter by parameter array', function (done) {
      request
        .post('/demo/post')
        .send('username=admin')
        .send('token=1234567890')
        .send('address[code]=370203')
        .send('address[home]=山东省青岛市市北区')
        .expect(200)
        .expect(function (res) {
          assert.equal(res.body.username, 'admin');
          assert.equal(res.body.token, '1234567890');
          assert.equal(res.body.address.code, '370203');
          assert.equal(res.body.address.home, '山东省青岛市市北区');
        })
        .end(done);
    });

  });


  // send parameter in uri route
  describe('test uri method', function () {

    it('shold send parameter in uri method', function (done) {
      request
        .post('/demo/uri/admin/1234567890')
        .expect(200)
        .expect(function (res) {
          assert.equal(res.body.username, 'admin');
          assert.equal(res.body.token, '1234567890');
        })
        .end(done);
    });

  });

  // upload
  describe('test upload file', function () {

    it('shold upload file', function (done) {
      request
        .post('/demo/upload')
        .field('username', 'admin')
        .field('token', '1234567890')
        .field('address[code]', '370203')
        .field('address[home]', '山东省青岛市市北区')
        .attach('photo', 'C:/Users/admin/Pictures/Saved Pictures/3422.jpg')
        .attach('background', 'C:/Users/admin/Pictures/Saved Pictures/1106628.jpg')
        .expect(200)
        .expect(function (res) {
          assert.equal(res.body.username, 'admin');
          assert.equal(res.body.token, '1234567890');
          assert.equal(res.body.photo, '3422.jpg');
          assert.equal(res.body.background, '1106628.jpg');
          assert.equal(res.body.address.code, '370203');
          assert.equal(res.body.address.home, '山东省青岛市市北区');
        })
        .end(done);
    });

  });


});