// Dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express config

// tell node we are creating an express server
var app = express();

// Sets an initial port. this will be used later with a listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Router
// point the server to a series of route files
// these routes give our server a 'map' of how to respond when users visit or request data from various URLs

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
})
