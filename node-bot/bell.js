/*
Nodebot workshop. Used rwaldo's github repository for resources
Create a UDP server that plays a sound when a message is received
*/

/*
Resources used: https://github.com/rwaldron/johnny-five/blob/master/docs/piezo.md
http://nodejs.org/api/dgram.html
*/

var jfive = require('johnny-five')
var dgram = require('dgram');
var board = new jfive.Board()

board.on('ready', function() {
	
	// Attach a piezo to pin 8
	var piezo = new jfive.Piezo(8);
	// Use the dgram node module to create a udp4 socket
	const server = dgram.createSocket('udp4')
	// Bind your server to port 1337 and listen for messages
	server.bind(1337)
	// When a message is received, have the piezo play a tune
	server.on('message', function(msg, rinfo) {
		piezo.play({
			// song is composed by a string of notes
			// a default beat is set, and the default octave is used
			// any invalid note is read as "no note"
			song : "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
			beats : 1/4,
			tempo : 100
		});
	})
})