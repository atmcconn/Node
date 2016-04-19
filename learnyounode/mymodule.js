var path = require('path');
var fs = require('fs');

module.exports = function (dir, fileExt, callbackFunc) {
	
	fs.readdir(dir, function(err, data) {
		var arr = [];
		if (err) return callbackFunc(err);
		data.forEach(function (item) {
			if (path.extname(item) === '.' + fileExt)
				arr.push(item);
		});
		callbackFunc(null, arr);
	});
};

/*
Official solution:

var fs = require('fs')
var path = require('path')

module.exports = function( dir, filterStr, callback) {
	
	fs.readdir( dir, function (err, list) {
		if (err)
			return callback(err)
		
		list = list.filter(function (file) {
			return path.extname(file) === '.' + filterStr
		})
		
		callback(null, list)
	})
}
	
*/