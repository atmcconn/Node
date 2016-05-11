/*
Nodebot workshop. Used rwaldo's github repository for resources
Build a street lamp that turns on as it gets dark.
*/

/* Resources used: https://github.com/rwaldron/johnny-five/wiki/Sensor
http://node-ardx.org/electronics-primer#photoresistor

*/
var jfive = require('johnny-five')
var board = new jfive.Board()

board.on('ready', function() {
	
	//Use a photoresistor and an LED
	//Connect the photoresistor to A0 and the LED to pin 9
	var photoResist = new jfive.Sensor("A0")
	var led = new jfive.Led(9)
	// Make the LED turn on when the photoresistor's value is greater than 600
	
	
	//Hint: johnny-five has a generic Sensor object for handling various analog inputs.
	// It fires a data event with the current reading of the sensor. The sensor value is available
	// to the callback as this.value
	
	photoResist.on('data', function() {
		if (this.value < 600) led.off()
		else led.on()
	})
})
