var jfive = require('johnny-five')
var board = new jfive.Board()

board.on('ready', function() {
	// Attach a motor to pin 9 and start it spinning
	var motor = new jfive.Motor(9);
	// Spin the motor at 200 mph
	// Start it spinning again after another second
	// Ensure this loop repeats infinitely
	
	motor.on('start', function() {
		board.wait(2000, function() {
			motor.stop()
		})
	})
	
	motor.on('stop', function() {
		board.wait(1000, function() {
			motor.start(200)
		})
	})
	
	motor.start(200)
	
});
