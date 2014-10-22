// load webservice and database libraries
var cradle = require('cradle')
var express = require('express');
var couchapp = require('couchapp');

var db = new(cradle.Connection)('http://127.0.0.1', 5984, {
	auth: {username: 'admin', password: 'admin'}
}).database('encyclopedia');

module.exports = db;

// difference between ""   and ''
module.exports = ["actions",'members',"apps","assignments",'resources',"calendar","community","feedback","report","resources"] 

// instantiate express
var app = express();

// serve static content (html, css, js) in the public directory
app.use(express.static(__dirname + '/public'));

app.get("/home", function (req, res) {
    res.json(process.env);
});

var ipaddress = "127.0.0.1";
var port = 3000;
// listen to port 3000 in localhost
app.listen(port, ipaddress);