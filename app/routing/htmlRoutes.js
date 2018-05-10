// Your htmlRoutes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

//DEPENDENCIES
// include the path package to get the correct file for our html
var path = requre("path");

// Routing 

module.exports = function(app) {
  //HTML GET Requests
  // Below code handles when users visit a page.
  // show user HTML pages of content

  app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  app.get("/")

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};