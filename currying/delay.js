
var delay = function (firstArg) {
	return function(secondArg) {
		return firstArg + secondArg;
	}
}

module.exports = delay;