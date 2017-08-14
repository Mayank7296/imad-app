var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/resume',function(req, res){
  res.send("Resume Will start downloading in short time!");
});

app.get('/profile-page',function(req, res){
  res.send("Mayank's Profile is Great Please Hire him!!");
});

app.get('/portfolio',function(req, res){
  res.send("Hi! Mayank's Portfolio has many projects Please Have a look in Resume");
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/resume',function(req, res){
  res.send("Resume Will start downloading in short time!");
});

app.get('/profile-page',function(req, res){
  res.send("Mayank's Profile is Great Please Hire him!!");
});

app.get('/portfolio',function(req, res){
  res.send("Hi! Mayank's Portfolio has many projects Please Have a look in Resume");
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
