/*
	In order to write robust programs, we sometimes need to check an object conforms to the type that we need first.
	
	Write a function 'duckCount' that returns the number of arguments passed to it which have a property
	'quack' defined directly on them. Do not match values inherited from prototypes.
*/

function duckCount() {
	return Array.prototype.slice.call(arguments).filter(function(obj) {
		return Object.prototype.hasOwnProperty.call(obj, 'quack')
	}).length;
}

module.exports = duckCount;