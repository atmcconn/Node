/*
Use Array#reduce to implement a simple version of Array#map
*/

module.exports = function arrayMap(arr, fn) {
	//Solution goes here
	return arr.reduce( function(prev, cur, idx, arr) {
		prev.push(fn.call(null, cur, idx, arr));
		return prev
	}, [])
}


/* Official Solution

function arrayMap(arr, fn, thisArg){
	return arr.reduce( function(acc, item, index, arr) {
		acc.push(fn.call(thisArg, item, index, arr))
		return acc
	}
}

*/