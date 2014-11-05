// load webservice and database libraries
var cradle = require('cradle')
var express = require('express');
var couchapp = require('couchapp');
var httpProxy = require('http-proxy');

var db = new(cradle.Connection)('http://cs5610.iriscouch.com', 5984, {
//var db = new(cradle.Connection)('http://127.0.0.1', 5984, {
	auth: {username: 'admin', password: 'admin'}
}).database('restaurant');

module.exports = db;

//module.exports = ["actions",'members',"apps","assignments",'resources',"calendar","community","feedback","report","resources"] 

// instantiate express
var app = express();

// serve static content (html, css, js) in the public directory
app.use(express.static(__dirname + '/public'));

app.get("/home", function (req, res) {
    res.json(process.env);
});