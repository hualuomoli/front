var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var colors = require('colors');

var logger = require('./logger/logger');


var app = express();

// set port
app.set('port', process.env.PORT || 3000);

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// app.use(logger('dev'));

// parse application/json 
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse cookie
app.use(cookieParser());

// static
// app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function () {
  logger.debug('server started in ' + app.get('port'));
})
module.exports = app;