var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3002;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// Star Wars Characters (DATA)
// =============================================================

var reserve = [{
  routeName: "reservation",
  name: "name",
  phone: "###-###-####",
  email: "email",
  uniqueId: 12345
}];

// Routes
// =============================================================

//
// send to index
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
//send to view
app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname,"view.html"));
})

//send to reservations
app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});
// Create New reservation - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  var newReservation = req.body;

  console.log(newReservation);

  // We then add the json the user sent to the character array
  characters.push(newReservaton);

  // We then display the JSON to the users
  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});