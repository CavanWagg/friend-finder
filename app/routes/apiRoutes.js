// Load DATA 
// Link our routes to our "data" sources.
var path = require('path');
var friendData = require("../data/friends");

// Routing 

module.exports = function(app) {
  // API Get Requests
  // Below code handles when users 'visit' a page
  // In each of the below cases when a user visits a link
  app.get("/api/friends", function(req, res){
     res.json(friendData);
  });

  /* API POST Requests
  the code handles when a user submits a form and submits data to the server.
  When a user submits form data (a JSON object) the JSON is
  pushed to the appropriate Javascript array
  User fills out questions this data is then sent to the server
  then the server saves the data to the array)
*/
//
app.post("/api/friends", function(req, res) {
  const userInput = req.body;
  const userResponses = userInput.scores; 

  const matchName = '';
  const totalDifference = 10000;
 
// Examine existing friends in the list
for (var i = 0; i < friends.length; i++) {
  // compute differences for each question
  var diff = 0;
  for (var j = 0; j < userResponses.length; j++) {
    diff += Math.abs(friends[i].scores[j] - userResponses[j]);
  }
  // If lower difference, record the match
  if (diff < totalDifference) {
    totalDifference = diff;
    matchName = friends[i].name;
  }
}
// Add new user
friendData.push(userInput);

// Send response 

res.json({status: 'OK', matchName: matchName});
})
};
