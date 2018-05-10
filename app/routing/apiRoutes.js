// Load DATA 
// Link our routes to our "data" sources.

var friendData = require("../data/friends");

// Routing 

module.exports = function(app) {
  // API Get Requests
  // Below code handles when users 'visit' a page
  // In each of the below cases when a user visits a link
  app.get("/api/friends", function(req, res){
    res.json(friends);
  });

  /* API POST Requests
  the code handles when a user submits a form and submits data to the server.
  When a user submits form data (a JSON object) the JSON is
  pushed to the appropriate Javascript array
  User fills out questions this data is then sent to the server
  then the server saves the data to the tableData array)
*/

app.post("/api/friends", function(req, res) {
  res.json(true);
  // 
})
}


