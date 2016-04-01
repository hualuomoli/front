var express = require('express');
var logger = require('../logger/logger');

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  logger.debug('call user get method.');
  res.send('respond with a resource');
});



module.exports = router;