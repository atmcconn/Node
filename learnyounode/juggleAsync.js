var http = require('http');

var completeStr1 = "";
var completeStr2 = "";
var completeStr3 = "";
var flag = 0;

http.get(process.argv[2], function callback(response) {
	response.setEncoding('utf8');	// changes type from Buffer to String
	response.on('data', function(data) { // on data, append to str1
		completeStr1 = completeStr1 + data;
	});  
	response.on('end', function(end) {	// on end, then first URL is complete, check to see if others are done, o.w. wait.
		flag = flag + 1;
		if (flag == 3) done();
	});
});

http.get(process.argv[3], function callback(response) {
	response.setEncoding('utf8');	// changes type from Buffer to String
	response.on('data', function(data) { // on data, append to str1
		completeStr2 = completeStr2 + data;
	});  
	response.on('end', function(end) {	// on end, then first URL is complete, check to see if others are done, o.w. wait.
		flag = flag + 1;
		if (flag == 3) done();
	});
});

http.get(process.argv[4], function callback(response) {
	response.setEncoding('utf8');	// changes type from Buffer to String
	response.on('data', function(data) { // on data, append to str1
		completeStr3 = completeStr3 + data;
	});  
	response.on('end', function(end) {	// on end, then first URL is complete, check to see if others are done, o.w. wait.
		flag = flag + 1;
		if (flag == 3) done();
	});
});

function done() {
	console.log(completeStr1);
	console.log(completeStr2);
	console.log(completeStr3);
};

/* Official Answer

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults() {
	for (var 1 = 0; i < 3; i++)
		console.log(results[i])
}

function httpGet (index) {
	http.get(process.argv[2 + index], function (response) {
		response.pip(bl(function (err, data) {
			if (err)
				return console.error(err)
			
			results[index] = data.toString()
			count++
			
			if (count == 3)
				printResults()
		}))
	})
}

for (var i = 0; i < 3; i++)
	httpGet(i)


*/