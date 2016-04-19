var http = require('http');
var map = require('through2-map');
var url = require('url');

var endPt = '/api/parsetime';
var endPT2 = '/api/unixtime';
var server = http.createServer(function callback(req, res) {
	//request handling logic
	if (req.method != 'GET')
		return res.end('Not a GET request\n');
	var urlObj = url.parse(req.url, true);
	var qTime = urlObj['query'];
	var path  = urlObj['pathname'];
	var utcTime = new Date(qTime['iso']);
	var retVal = null;
	if (path == endPt) {
		retVal = JSON.stringify({hour:utcTime.getUTCHours() - (utcTime.getTimezoneOffset() / 60),
			minute:utcTime.getUTCMinutes(), second:utcTime.getUTCSeconds()});
	}
	else {
		retVal = JSON.stringify({unixtime: utcTime.getTime()});
	}
	//console.log(retVal);
	res.writeHead(200, { 'Content-Type' : 'application/json' });  //To be a good web citizen
	res.write(retVal);
	res.end();
});

server.listen(Number(process.argv[2]));


/* Official Solution

var http = require('http')
var url = require('url)

function parsetime (time) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}
}
function unixtime (time) {
	return { unixtime : time.getTime() }
}

var server = http.createServer(function ( req, res ) {
	var parseUrl = url.parse ( req.url, true )
	var time = new Date( parsedUrl.query.iso )
	var result
	
	if ( /^\/api\/parsetime/.test(req.url))
		result = parsetime(time)
	else if (/^\api\/unixtime/.test(req.url))
		result = unixtime(time)
	
	if (result) {
		res.writeHead( 200, { 'Content-Type' : 'application/json' })
		res.end(JSON.stringify(result))
	} else {
		res.writeHead(404)
		res.end()
	}
})
server..isten(Number(process.argv[2]))


*/