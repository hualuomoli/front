var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

router.get('/all', function (req, res, next) {
	var filename = path.join(__dirname, '../data/sidebar/menus.json');
	fs.readFile(filename, 'UTF-8', function (err, data) {
		if (!err) {
			res.send(JSON.parse(data));
		}
	});
});

module.exports = router;