var fs = require('fs');
var bufObject = fs.readFileSync(process.argv[2]);
var str = bufObject.toString();
var splitStr = str.split('\n');
console.log(splitStr.length-1);