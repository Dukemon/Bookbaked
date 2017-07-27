var http = require('http');
var express = require('express');
var bodyParser= require('body-parser');

var app=express();

app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/bootstrap', express.static(__dirname + '/bootstrap'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', function(req,res){
  res.sendFile(__dirname + '/1.html');
});

app.get('/friends', function(req,res){
  res.sendFile(__dirname + '/friends.html');
});

app.post('/', function(req,res){
  res.send(req.body);
});

var setting = require('./routes/settings.js');

new setting(app);
/*var fs=require('fs');
var server = http.createServer(function(req,res){
  console.log('request was made by: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  var obj= fs.createReadStream(__dirname + '/test.html', 'utf8');
  obj.pipe(res);
});*/

app.listen(3000,function(){
  console.log('yo dawgs, now listening to port 3000');

});
