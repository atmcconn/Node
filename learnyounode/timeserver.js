/***********************************************************************************************************************************
For this exercise we'll be creating a raw TCP server. There's no HTTP involved so we need to use the net module
from Node core which has all the basic networking functions. The server should listen to TCP connections on the port provided by 
the first argument. For each connection you must write the current date & 24 hour time in the format: YYY-MM-DD hh:mm

The net module has a method named net.createServer() that takes a callback function. Unlike most callbacks in Node,
the callback used by createServer() is called more than once. Every connection received by your server triggers 
another call to the callback. The callback function has the signature:

					function callback (socket) { /* ... /*}

For this exercise we only need to write data and then close the socket.
************************************************************************************************************************************/

var portNumber = process.argv[2];
var getTime = new Date();
var year = getTime.getFullYear();
var month = getTime.getMonth() + 1;
if (month < 10) {month = "0" + month; }
var date = getTime.getDate();
if (date < 10) {date = "0" + date; }
var hour = getTime.getHours();
if (hour < 10) {hour = "0" + hour; }
var min = getTime.getMinutes();
if (min < 10) {min = "0" + min; }

// A typical Node TCP server looks like this:
var net = require('net');

var server = net.createServer(function (socket) {
	// socket handling logic: socket.write(data) to write data to the socket & socket.end(data) to close the socket.
	socket.end(year + "-" + month + "-" + date + " " + hour + ":" + min + "\n");

});
server.listen(portNumber, function() { console.log('Server listening and bound'); });



/* Official Solution

var net = require('net')

function zeroFill(i) {
	return (i < 10 ? '0' : '') + i;
}

function now() {
	var d = new Date()
	return d.getFullYear() + '-'
		+ zeroFill(d.getMonth() + 1) + '-'
		+ zeroFill(d.getDate()) + ' '
		+ zeroFill(d.getHours()) + ':'
		+ zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
	socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))

*/