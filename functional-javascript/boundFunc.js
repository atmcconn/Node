/*
Use Function#bind to implement a logging function that allows you to namespace messages.

Your implementation should take a namespace string, and return a function that prints messages to the 
console with hte namespace prepended.
*/

module.exports = function(namespace) {
	// Solution goes here
	return console.log.bind(null, namespace);
	//return console.log.bind(console, namespace); also works
}