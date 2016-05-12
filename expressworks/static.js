/* This exercise is about serving static assets like HTML files.
There are many ways to do it, but we want you to apply static middleware to serve teh file index.html

do not use any routes like app.get; only STATIC.
*/

// Official solution also has: var path = require('path')
var express = require('express')
var app = express()

/* Hint:

	The index html file is provide and usable via the path supplied by process.argv[3]
	To call static middleware assuming the static folder is public and it's in the same folder as the 
	main project file:
		app.use( express.static( 'public' ))

	expressworks will pass the path in the CLI arg process.argv[3]. You can create a logical OR condition
	to use the CLI argument value or fallback to the absolute path to the public folder. The path is constructed
	using path.join()
*/

app.use( express.static( process.argv[3] || path.join(__dirname, 'public')))

// The solution must listen on the port number supplied by process.argv[2]
app.listen(process.argv[2])