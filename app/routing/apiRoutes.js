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

  // API POST Requests
  
}


