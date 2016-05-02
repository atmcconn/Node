/* 
 Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array.
*/

function countWords( inputWords ) {
	return inputWords.reduce( function(countArr, val) {
		countArr[val] = ++countArr[val] || 1  //increment or initialize to 1;
		return countArr;
	}, {})
}

module.exports = countWords;

/* Official Solution

function countWords (arr) {
	return arr.reduce(function(countMap, word) {
		countMap[word] = ++countMap[word] || 1  //increment or initialize to 1
		return countMap
	}, {}) //second argument to reduce initialises countMap to {}
}

module.exports = countWords


1st Try:
function countWords( inputWords ) {
	var countArr = {};
	return inputWords.reduce( function(prev, cur, index, arr) {
		if (index == 1){
			countArr[prev] = 1;
			countArr[cur]  = 1;
		}	
		else {
			if (countArr[cur]) countArr[cur] += 1;
			else countArr[cur] = 1;
		}
		return countArr;
	})
}
*/
