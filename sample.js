var express = require('express');
var path = require('path');
var app = express();

// 
app.use('/assets', express.static(path.join(__dirname, 'bower_components')));
// sample
app.use('/', express.static(path.join(__dirname, 'sample/views'))); // views
app.use('/static', express.static(path.join(__dirname, 'sample/static'))); // static
app.use('/', express.static(path.join(__dirname, 'sample/app'))); // angular

app.set('port', process.env.PORT || '3000');

var server = app.listen(app.get('port'), function (req, res) {
	console.log('server started in http://%s:%s', server.address().address, server.address().port);
});