
module.exports = function high_ord_func( func, num ) {
	var i = 0;
	for (i; i < num; i++)
	{
		func();
	}
}

/*
official solution

function repeat(operation, num) {
	if (num <= 0) return
	operation()
	return repeat(operation, --num)
}
module.exports = repeat
*/