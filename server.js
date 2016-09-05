// Require our dependencies
var express = require('express'),
  React = require('react'),
  ReactDOMServer = require('react-dom/server');

// Create an express instance and set a port variable
var app = express();
const PORT = process.env.PORT || 8080;

// Set /public as our static content dir
app.use("/", express.static(__dirname + "/public"));

app.use(function(rq, res, next){
  if(req.headers['x-forwarded-ptoto'] == 'http'){
    next();

  } else {
    res.redirect('http://'+req.hostname+req.url)
  };
})

app.get('/test', function(req, res){
  var tasks = [
    {id: 1, taskTitle: 'AnuarCORE', desc:"Managing multiple projects", category: "project", completion: "20%", technologies: ["React", "NodeJS", "Mongoose", "Mongo", "Heroku", "D3 JS"]},
    {id: 2, taskTitle: 'REACT', desc:"My primary framework",category: "learning", completion: "70%", technologies: ["React", "Foundation", "Heroku", "ReactNative"]},
    {id: 3, taskTitle: 'QNect', desc:"Connect with professionals nearby with a couple of clicks", category: "project", completion: "5%", technologies: ["ReactNative", "NodeJS", "Mongoose", "Mongo", "Geolocation"]},
    {id: 4, taskTitle: 'UnrealEngine4/C++', desc:"Enhancing my UE4 with C++", category: "learning", completion: "25%", technologies: ["UnrealEngine4", "C++", "Maya"]},
    {id: 5, taskTitle: 'Algorithms', desc:"Never ending...", category: "learning", completion: "50%",  technologies: ["JavaScript"]},
    {id: 6, taskTitle: 'D3 JS', desc:"A tool to specialize in", category: "learning", completion: "0%",  technologies: ["D3", "JavaScript"]}]
  res.json({tasks: tasks});
})

// Fire it up (start our server)
var server = app.listen(PORT, function() {
  console.log('Express server listening on port ' + PORT);
});
