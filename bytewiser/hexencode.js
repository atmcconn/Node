
var arr = process.argv.slice(2);
const buf1 = Buffer(arr);
console.log(buf1.toString('hex'));

/* Official solution

var bytes = process.argv.slice(2).map(Number);
console.log(Buffer(bytes).toString('hex'));

*/