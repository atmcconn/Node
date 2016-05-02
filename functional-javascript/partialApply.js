
/*
 Use partial application to create a function that fixes the first argument to
 console.log. Your implementation should take a namespace String and return a function
 that prints messages to the console with the namespace prepended.
*/

var slice = Array.prototype.slice;

function logger(namespace) {
	return function() {
		console.log.apply(null, [namespace].concat(slice.call(arguments)));
	}
}

module.exports = logger;

/*
Official Solution

var slice = Array.prototype.slice

function logger(namespace) {
	return function() {
		console.log.apply(console, [namespace].concat(slice.call(arguments)))
	}
}
module.exports = logger;

*/