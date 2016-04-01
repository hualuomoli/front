var express = require('express');
var logger = require('../logger/logger');

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  logger.debug('call user get method.');
  res.send([{
    "username": "hualuomoli",
    "nickaname": "花落莫离"
  }, {
    "username": "manager",
    "nickaname": "管理员"
  }]);
});

router.post('/login', function (req, res) {
  logger.debug('parameter ' + JSON.stringify(req.body));

  if (!req.body || !req.body.username) {
    res.send({
      "code": "9",
      "msg": "no user"
    });
  } else if ('manager' != req.body.username) {
    res.send({
      "code": "8",
      "msg": "username or password error"
    });
  } else if ('manager' == req.body.username) {
    res.send({
      "code": "0",
      "msg": "success"
    });
  }
});



module.exports = router;