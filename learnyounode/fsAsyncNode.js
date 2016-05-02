var fs = require('fs');		// require is a special function provided by node
var numDelimeter = 0;

function async_exer() {		
	fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
		var contents = fileContents.split('\n');
		numDelimeter = contents.length - 1;
		console.log(numDelimeter);
	})
	
}

async_exer();




/* Here's the official solution:
var fs = require('fs')
var file = process.argv[2];
fs.readFile ( file, function(err, contents) {
	//fs.readFile(file, 'utf8', callback) can also be used
	var lines = contents.toString().split('\n').length - 1;
	console.log(lines);
});

*/