/*
Nodebot workshop. Used rwaldo's github repository for resources
Write a program that acts like a light switch to turn an LED on/off.
*/

/* Resources used: https://github.com/rwaldron/johnny-five/wiki/Button#usage
https://github.com/rwaldron/johnny-five/wiki/Led#api

*/

var jfive = require('johnny-five')
var board = new jfive.Board()

board.on('ready', function() {
	// Attach a button to pin 5 and an LED to pin 9
	var button = new jfive.Button(5);
	var led = new jfive.Led(9);
	var pushFlag = false
	// Use the Button class to detec press events and toggle your LED on/off
	button.on('press', function() {
		if (pushFlag) { 
			led.off()
			pushFlag = false
		}
		else {
			led.on()
			pushFlag = true
		}
	})
	
});

