
function doubleAll(numbers) {
	return numbers.map(function(element) {
		return element*2;
	});;
}

module.exports = doubleAll;

/* Official Solution
module.exports = function doubleAll(numbers) {
	return numbers.map(function double(num) {
		return num * 2
	})
};
*/