// Require our dependencies
var express = require('express'),
  React = require('react'),
  ReactDOMServer = require('react-dom/server');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;

// Set /public as our static content dir
app.use("/", express.static(__dirname + "/public"));

app.get('/test', function(req, res){
  var tasks = [
    {id: 1, taskTitle: 'AnuarCORE', category: "project", completion: "20%", technologies: ["React", "NodeJS", "Mongoose", "Mongo", "Heroku", "D3 JS"]},
    {id: 2, taskTitle: 'REACT', category: "learning", completion: "70%", technologies: ["React", "Foundation", "Heroku", "ReactNative"]},
    {id: 3, taskTitle: 'QNect: React Native', category: "project", completion: "5%", technologies: ["React", "NodeJS", "Mongoose", "Mongo", "Geolocation"]},
    {id: 4, taskTitle: 'UnrealEngine4/C++', category: "learning", completion: "25%", technologies: ["UnrealEngine4", "C++", "Maya"]},
    {id: 5, taskTitle: 'Algorithms', category: "learning", completion: "50%",  technologies: ["JavaScript"]},
    {id: 6, taskTitle: 'D3 JS', category: "learning", completion: "0%",  technologies: ["D3", "JavaScript"]}]
  res.json({tasks: tasks});
})

// Fire it up (start our server)
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
