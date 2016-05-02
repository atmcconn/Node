
var input_array = process.argv;
var sum = 0;
for (var i = 2; i < input_array.length; i++) {
	sum += parseInt(input_array[i]);
}
console.log(sum);