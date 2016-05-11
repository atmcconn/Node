/*
Nodebot workshop. Used rwaldo's github repository for resources
Make a remote control robot arm
*/

/* Resources used: http://node-ardx.org/electronics-primer#pot
https://github.com/rwaldron/johnny-five/wiki/Sensor
https://github.com/rwaldron/johnny-five/blob/master/lib/fn.js

*/

var jfive = require('johnny-five')
var board = new jfive.Board()

board.on('ready', function() {
	
	// Use a rotary potentiometer to control the position of a servo
	// Attach a potentiometer to pin A2
	var pot = new jfive.Sensor("A2")
	
	// Attach a server to pin 9
	var servo = new jfive.Servo({
		pin : 9,
		startAt: 0
	})
	/*	
	 Have the servo rotate as the potentiometer is turned
	 Hints: five.Fn.map can map the pot values (0 - 1023) to servo angles (0 - 179)

	 Fn.map calls an internal function Fn.fmap which maps one number to another
	 Fn.fmap = function( value, fromLow, fromHigh, toLow, toHigh) {
		return (value - fromLow) * (toHigh - toLow) / (fromHigh - from Low) + toLow;
	}
	*/
	pot.on('data', function(ohmVal) {
		servo.to(jfive.Fn.map(ohmVal, 0, 1023, 0, 179));
	})
	
})