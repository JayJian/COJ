var express = require('express')
var app = express();
var restRouter = require("./routes/rest");
var indexRouter = require("./routes/index");
var mongoose = require("mongoose");
var path = require("path");
var http = require('http');

var socket_io = require("socket.io");
var io = socket_io();
var socketService = require('./services/socketService')(io);

mongoose.connect("mongodb://admin:12345@ds125060.mlab.com:25060/coj");
app.use(express.static(path.join(__dirname,'../public')));

app.use("/",indexRouter);
//handle all api related query by restRouter
app.use("/api/v1/",restRouter);

//handle all the other url query to the client side
app.use(function(req, res) {
    // send index.html to start client side
    res.sendFile("index.html", { root: path.join(__dirname, '../public/') });
});


var server = http.createServer(app);
io.attach(server);
server.listen(3000);

server.on('error', onError);
server.on('listening', onListening);

function onError(error){
    throw error;
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr == 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
    console.log('Listening on' + bind);

}