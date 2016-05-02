var http = require('http');
var bl = require('bl');		// 3rd party package

var intNumChar = 0;
var completeStr = "";

http.get(process.argv[2], function callback(response) {
	response.setEncoding('utf8');	// changes type from Buffer to String
	response.on('data', function(data) { // on data, first count and add to int, then append to str
		intNumChar = intNumChar + data.length;
		completeStr = completeStr + data;
	});  
	response.on('end', function(end) {	// on end, print integer and complete string on separate lines
		console.log(intNumChar);
		console.log(completeStr);
	});
});


/* Official Solution

var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
	response.pipe(bl(function (err, data) {
		if (err)
			return console.error(err)
		data = data.toString()
		console.log(data.length)
		console.log(data)
	}))
})
*/
