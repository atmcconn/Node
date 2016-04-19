var http = require('http')

http.get(process.argv[2], function(response) {
	response.setEncoding('utf8');
	response.on('data', console.log);
});


/* Official Solution listed above. My solution below is incorrect but moving forward.

someResponse = http.get(process.argv[2], function callback(response) {
	console.log(response);
}).on('data', function(data) {
	console.log(data);
	
});



*/