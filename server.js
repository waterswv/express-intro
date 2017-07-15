// server.js
// SERVER-SIDE JAVASCRIPT
// this initiates a variable to import the express framework
// the second line initializes an app that runs the express engine
var express = require('express');
var app = express();

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
// this enables our server to accept requests from outside our machine
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//WHAT IS GOING ON HERE with /Public?
app.use(express.static(__dirname + '/public'));

// HOW DOES THE ROOT WORK? __dirname?????
// this method and callback function listens for a get and the runs the callback
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
  console.log(req.path);

});

// this creates an endpoint to return albumns data from /api
app.get('/api/albums', function (req, res){
  res.json(albums);
  console.log(albums[0]);
});

app.get('/api/taquerias', function (req, res) {
    res.json(taquerias);
  });
  
// turns the server on and listens either in production use the production port, otherwise use 3000 (for development)
// the consle log occurs in the terminal
app.listen(3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});

// the below array of objects is seed data to test different access methods from servers.
var albums = [
  {
    title: 'Cupid Deluxe',
    artist: 'Blood Orange'
  },
  {
    title: 'M3LL155X - EP',
    artist: 'FKA twigs'
  },
  {
    title: 'Fake History',
    artist: 'letlive.'
  }
];

// Taqueria Seed Data to test end points with.
var taquerias = [
  { name: "La Taqueria" },
  { name: "El Farolito" },
  { name: "Taqueria Cancun" }
];
