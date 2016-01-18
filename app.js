var express = require('express');
var path = require('path');
var app = express();

// 
app.use('/', express.static(path.join(__dirname, 'dist')));

app.set('port', process.env.PORT || '3000');

var server = app.listen(app.get('port'), function (req, res) {
	console.log('server started in http://%s:%s', server.address().address, server.address().port);
});