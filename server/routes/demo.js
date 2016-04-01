var express = require('express');
var logger = require('../logger/logger');

var router = express.Router();

// response type
// text/plain
router.get('/type/txt', function (req, res) {
  res.type('txt');
  res.status(200);
  res.send('ok')
});

// response to type : application/json
router.get('/type/json', function (req, res, next) {
  // res.type('json');
  // res.status(200);
  res.send({
    "msg": "ok"
  });
});

// query string parameter
router.get('/parameter', function (req, res) {
  logger.debug('get  username ' + req.query.username + ' ' + req.body.username);
  logger.debug('get  nickname ' + req.query.nickname + ' ' + req.body.nickname);
  res.type('txt');
  res.send('ok');
});

// body parameter
router.post('/parameter', function (req, res) {
  logger.debug('post username ' + req.body.username);
  logger.debug('post nickname ' + req.body.nickname);
  res.type('txt');
  res.send('ok');
});

// url parameter
router.post('/parameter/:username/:nickaname', function (req, res) {
  logger.debug('username ' + req.body.username);
  logger.debug('nickname ' + req.body.nickname);
  res.type('txt');
  res.send('ok');
})


module.exports = router;