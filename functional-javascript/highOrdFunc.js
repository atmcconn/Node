/*
Higher-order functions
*/

function repeat ( operation, num ) {
	if (num == 0) { return operation(); }
	else { return repeat( operation, --num ); }
}

module.exports = repeat;
