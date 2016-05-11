/*
NOT FULLY VERIFIED. THROW ERR CANNOT FIND MODULE 'WEAK'

Nodebot workshop. Used rwaldo's github repository for resources
Temperature near you as a service. 
	Use dnode to create an rpc server that allows anyone to query the last known temperature of 
		a TMP36 temperature sensor.

Resources used: 
http://node-ardx.org/electronics-primer#tempsensor
https://github.com/rwaldron/johnny-five/blob/master/docs/temperature-tmp36.md
https://hithub.com/substack/dnode
*/

var dnode = require('dnode')
var jfive = require('johnny-five')
var board = new jfive.Board()
board.on('ready', function() {
	
	// Attach temperature sensor to A0
	var tmp36 = new jfive.Thermometer({
		controller : 'TMP36',
		pin : 'A0'
	})

/* Hints
- The value from a sensor is a representation of the voltage on that pin
- You'll need to convert that value into a useful temperature reading
*/	

	var temp = null
	// getTemperature should callback with the temperature in celsius
	tmp36.on('data', function() {
		temp = this.celsius
	})

	var server = dnode({
		// - To create an endpoint, pass dnode an object with your endpoint as a method
		// - Your endpoint should take a callback and pass the value to it
		// - Your rpc endpoint should expose a function called getTemperature
		getTemperature: function (cb) {
			cb(temp)
		}
	})
	// Setup your dnode server to listen on port 1337
	server.listen(1337);
})