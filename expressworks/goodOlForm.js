/*
Forms are important. This will teach how to process the traditional (non-AJAX) web form.
Write a route ('/form') that processes HTML form input. (<form><input name="str"/></form> and prints the value of str
	backwards.
	
To handle a POST request, use the post() method which is used the same way as get():
	app.post('/path', function(req, res) {...})
	
Express.js uses middleware to provide extra functionality to your web server.
Simply put, a middleware is a function invoded by Express before your own request handler

Middleware provide a large variety of functionality such as logging, serving static files, and error handling.
It is added by calling use() on the application and passing the midleware as a parameter.

To parse x-www-form-urlencoded reuqest bodies, Express can use urlencoded() middleware from the body-parser module:
	var bodyparser = require('body-parser')
	app.use(bodyparser.urlencoded( {extended: false} ))
*/

/* Resource:
https://github.com/senchalabs/connect#middleware
https://github.com/expressjs/body-parser
*/

var path = require('path')
var bodyparser = require('body-parser')
var express = require('express')
var app = express()

app.use(bodyparser.urlencoded( {extended: false} ))  // <-- Need to understand this better
app.post('/form', function (req, res) {
	res.send(req.body.str.split('').reverse().join(''))  // Copied from hints section in exercise
})

app.listen(process.argv[2]) // Port to listen to