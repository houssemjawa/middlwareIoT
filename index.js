var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://localhost:1884');
var express = require('express');
var app = express();
var path = require('path');
var value = require('./routes.js');
var mongoose = require ('mongoose');
//var WebSocket = require('faye-websocket');
var http = require('http');
var list = [];
app.use(express.static(path.join(__dirname, 'public')));
/*
* Connect to Database
*/
mongoose.connect('mongodb://localhost/middlware',{
  useMongoClient : true
},function(){
  /* Connection to database state :
   * 1 : Connected
   * 2 : Connecting
   * -1 : failed
   */
  console.log(mongoose.connection.readyState);
});
console.log(mongoose.connection.readyState);
/*
* Connect to MQTT brocker
*/
client.on('connect', function () {
  client.subscribe('/topic/values');
});
/*
* Read message from the brocker
*/
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  list.push({newValue : message.toString()});
  console.log(list);

  //client.end();
});
app.get('/new', (req, res) => {
res.json(list);
});

/*
* Use Api
*/
app.use('/api',value);
// views
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/test.html'));
});
/*
* Starting HTTP server
* @param prot 8080
*/
const port = 8080;
app.listen(port,function(){
  console.log("server listen on port "+port);
});
