/*
let & const are used to denote variables which are Block Scoped to
the current curly braced block:
	if (true) {
		let aVariable;
	}
aVariable is block scoped within the if's curly brace
*/


function foo () {
	var bar = false;
	quux = 1; // Is now globally scoped... due to the absent 'var' or 'let'
	function zip () {
		bar = true;
		var quux = 0; // Shadowing the global quux
	}
	return zip;
}

/*
Exercise 1:
function foo() { var bar; }

Exercise 2:
function foo () {
	var bar;
	function zip () {
		var quux;
	}
}

Exercise 3:
function foo () {
	var bar;
	quux = 1; // Is now globally scoped... due to the absent 'var' or 'let'
	function zip () {
		var quux = 0; // Shadowing the global quux
	}
}

Exercise 4:
function foo () {
	var bar = false;
	quux = 1; // Is now globally scoped... due to the absent 'var' or 'let'
	function zip () {
		bar = true;
		var quux = 0; // Shadowing the global quux
	}
	return zip;
}
*/