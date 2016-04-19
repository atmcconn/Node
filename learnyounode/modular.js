var mymodule = require('./mymodule');

var dir = process.argv[2];
var ext = process.argv[3];

var lArray = mymodule(dir, ext, callbackFunc);

function callbackFunc(err, data) {
	if (err) console.log("Error occurred!");
	else {
		for( var i = 0; i < data.length; i++) {
			console.log(data[i]);
		}
	}
}


/*
Official solution is:

var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function(err, list) {
	if (err)
		return console.error('There was an error: ', err)
	
	list.forEach(function (file) {
		console.log(file)
	})
})


See mymodule for official solution for module.js file
*/


