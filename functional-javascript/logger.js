/*
Use partial application to create a function that fixes the first argument to
console.log i.e. Implement a logging function that prepends a namespace string
to its output. Your implementation should take a namespace and return a function
that prints messages to the console with the namespace prepended.
*/

var slice = Array.prototype.slice
function logger (namespace) {
	//Solution Goes Here
	return function () {
		console.log.apply(null, [namespace].concat(slice.call(arguments)));
		//console.log.apply(console, [namespace].concat(slice.apply(arguments))); also works
		//console.log.apply(console, [namespace].concat(slice.call(arguments))); also works
	}
}

module.exports = logger;