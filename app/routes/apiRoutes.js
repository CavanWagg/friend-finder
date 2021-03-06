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

  let matchName = '';
  let matchImage = '';
  // Make initial value huge for comparison
  let totalDifference = 500;
 
// Examine existing friends in the list
for (var i = 0; i < friendData.length; i++) {
  // compute differences for each question
  var diff = 0;
  for (var j = 0; j < userResponses.length; j++) {
    diff += Math.abs(friendData[i].scores[j] - userResponses[j]);
  }
  // If lower difference, record the match
  if (diff < totalDifference) {
    totalDifference = diff;
    matchName = friendData[i].name;
    matchImage = friendData[i].photo;
  }
}

friendData.push(userInput);

// Send response 

res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
})
};
