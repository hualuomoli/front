var express = require('express');
var path = require('path');
var app = express();

// 
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/app', express.static(path.join(__dirname, 'app')));
app.use('/views', express.static(path.join(__dirname, 'views')));

app.set('port', process.env.PORT || '3000');

var server = app.listen(app.get('port'), function (req, res) {
	console.log('server started in http://%s:%s', server.address().address, server.address().port);
});