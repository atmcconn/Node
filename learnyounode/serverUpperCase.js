var fs = require('fs');
var http = require('http');
var map = require('through2-map');

var server = http.createServer(function callback(req, res) {
	//request handling logic
	if (req.method != 'POST')
		return res.end('Not a POST\n');
	
	req.pipe(map( function (chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(res);
});

server.listen(process.argv[2]);


/* Official Solution

var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
	if (req.method != 'POST')
		return res.end('send me a POST\n')
	
	req.pipe(map(function (chunk) {
		return chuck.toString().toUpperCase();
	})).pipe(res)
})
server.listen(Number(process.argv[2]);

*/