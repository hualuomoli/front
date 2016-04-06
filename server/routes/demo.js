var express = require('express');
var logger = require('../logger/logger');

var router = express.Router();

////////////////////////////
// response type
////////////////////////////

// text/plain
router.get('/res/txt', function (req, res) {
  res.status(200) // Status Code:
    .type('txt') // Content-Type
    // .type('text/plain') // Content-Type
    .send('ok') // response
});

// application/json
router.get('/res/json', function (req, res, next) {
  res.status(200)
    .type('json')
    .send({
      "msg": "ok"
    });
});

// application/xml
router.get('/res/xml', function (req, res, next) {
  res.type('xml');
  res.status(200);
  res.send('<root><username>admin</username><token>123456</token></root>');
});


////////////////////////////
// query parameter
////////////////////////////
router.get('/query', function (req, res) {
  logger.debug('query parameter[username] is ' + req.query.username);
  logger.debug('query parameter[token] is ' + req.query.token);
  res.send(req.query);
});

////////////////////////////
// body parameter
////////////////////////////
router.post('/post', function (req, res) {
  logger.debug('post parameter[username] is ' + req.body.username);
  logger.debug('post parameter[token] is ' + req.body.token);
  res.send(req.body);
});

////////////////////////////
// uri parameter
////////////////////////////
router.post('/uri/:username/:token', function (req, res) {
  logger.debug('uri parameter[username] is ' + req.params.username);
  logger.debug('uri parameter[token] is ' + req.params.token);
  res.send(req.params);
});


////////////////////////////
// file upload
////////////////////////////
router.post('/upload', function (req, res) {

  logger.debug('upload file parameter[username] is ' + req.body.username);
  logger.debug('upload file parameter[token] is ' + req.body.token);

  logger.debug('upload file photo is ' + req.files.photo.path);
  logger.debug('upload file background is ' + req.files.background.path);

  res.status(200)
    .type('json')
    .send({
      username: req.body.username,
      token: req.body.token,
      photo: req.files.photo.originalname,
      background: req.files.background.originalname
    });

});

module.exports = router;