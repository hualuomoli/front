var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

router.get('/alerts', function (req, res, next) {
	loadData('alerts', function (data) {
		res.send(data);
	});
});

router.get('/tasks', function (req, res, next) {
	loadData('tasks', function (data) {
		res.send(data);
	});
});

router.get('/messages', function (req, res, next) {
	loadData('messages', function (data) {
		res.send(data);
	});
});

router.get('/all', function (req, res, next) {
	var array = ['alerts', 'messages', 'tasks'];
	var count = 0;
	var obj = {};
	for (var i = 0; i < array.length; i++) {
		loadData(array[i], function (data, name) {
			count++;
			obj[name] = data;
			if (count === 3) {
				flushData(obj, res);
			}
		});
	}
});

function loadData(name, callback) {
	var filename = path.join(__dirname, '../data/notification/' + name + '.json');
	fs.readFile(filename, 'UTF-8', function (err, data) {
		if (!err) {
			callback(JSON.parse(data), name);
		}
	});
}

function flushData(data, res) {
	res.send(data);
}

module.exports = router;