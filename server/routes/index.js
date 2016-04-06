var express = require('express');

// routes
var demo = require('./demo');

module.exports = function (app) {

  setCross(app);

  app.post('/demo/*', urlencodedObjectParser);

  // user
  app.use('/demo', demo);

}

function setCross(app) {

  //设置跨域访问
  app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });

}

// parse urlencoded post object
function urlencodedObjectParser(req, res, next) {
  if (req.headers['content-type'] == 'application/x-www-form-urlencoded') {
    // TODO
    var address = {};
    address.code = req.body['address[code]'];
    address.home = req.body['address[home]'];
    req.body.address = address;
    delete req.body['address[code]'];
    delete req.body['address[home]'];
  }
  next();
}