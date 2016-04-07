var express = require('express');
var util = require('util');

// routes
var demo = require('./demo');

module.exports = function (app) {

  setCross(app);

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