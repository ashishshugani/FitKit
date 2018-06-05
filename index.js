var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

app.set("views", path.resolve(__dirname, "views"));
var publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

app.use(function(request, response, next) {
    console.log("In comes a " + request.method + " to " + request.url);
    next();
});

app.get('/', function(req, res) {
    res.render("index");
});

app.get('/nav', function(req, res) {
    res.render("navbar");
});

app.get('/calc', function(req, res){
	res.render("calc");
});


app.get('/*', function(req, res) {
    res.render("404");
});

app.set("view engine", "ejs");

app.listen(3000, function() {
    console.log("Started at 3000");
})