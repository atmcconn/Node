/*
 Write a function that takes one argument for each invocation and add on each argument 
 until it is called without argument in which case it should return sum of all arguments
 passed.
*/


var sum = 0;
var long_delay = function( firstArg ) {
	if (firstArg===undefined) {
		var result = sum;
		sum = null;
		return result;
	}
	else {
		sum = sum + firstArg;
		return long_delay;
	}
};

module.exports = long_delay;

