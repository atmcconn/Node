

var jfive = require('johnny-five')
var board = new jfive.Board()
board.on('ready', function() {
	// Solution goes here
// Create a new Server instance attached to pin 9
	var servo = new jfive.Servo(9)

// Use servo.sweep to rotate between 0 and 180 degrees
	servo.sweep();

// Use board.wait to schedule a 'reset' callback after 3 seconds
	board.wait(3000, function reset() {
// The 'reset' callback should stop and center the servo
	servo.stop()
		servo.center()
	});
})
