/*
Nodebot workshop. Used rwaldo's github repository for resources
Write a program that blinks an LED attached to pin 13 once every second
*/

var jfive = require('johnny-five');
var board = new jfive.Board();
board.on('ready', function() {
	// Solution goes here
	var led = new jfive.Led(13);  // Initialize pin 13, which controls the built-in LED
	
	/*
	Injecting object into the REPL allow access while the program is running.
	
	led.on()
	led.off()
	led.blink()
	*/
	
	this.repl.inject({
		led: led.blink(1000)
	});
});
	
