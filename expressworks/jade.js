/* Create an express app with a home page rendered by the Jade template engine.
The home page should respond to /home

The view should show the current date using 'new Date.toDateString()'.
We use 'toDateString()' to simply return the date in a human-readable format without the time.

*/
var path = require('path')
var express = require('express')
var app = express()

/* Hints
 - The path to index.jade will be provided in process.argv[3]
 - To specify the path to the template files in the folder templates:
		app.set('views', path.join(__dirname, 'templates'))
	* The __dirname is the absolute path of this file and path.join is used to produce cross-platform
	path
	
 - To tell Express.js app what template engine to use, apply this line to the Express.js configuration:
		app.set('view engine', 'jade')
	
 - Instead of Hello World's res.end(), the res.render() function accepts a template name and data
 (called locals):
		res.render('index', {date: new Date().toDateString()})
*/

app.set('views', path.join(__dirname, 'templates'))  //process.argv[3] was used instead of path.join
app.set('view engine', 'jade')
//app.use( express.static( process.argv[3] || path.join(__dirname, 'public'))) <-- Not needed
app.get('/home', function( req, res ){
	res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])