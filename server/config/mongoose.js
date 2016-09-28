var mongoose = require('mongoose');

var mongodbUri = 'mongodb://heroku_k0dtzmqq:at5qathe8ond94jupiuh60df9@ds041506.mlab.com:41506/heroku_k0dtzmqq';

mongoose.connect(mongodbUri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {

  // Create Task schema
  var taskSchema = new mongoose.Schema({
  	taskTitle: String,
  	desc: String,
  	category: String,
  	completion: String,
  	technologies: [String],
    urls: [String],
    image: String,
    priority: String
  });

  // Store Task documents in a collection called "Tasks"
  var Task = mongoose.model('task', taskSchema);

  // Create seed data
  var seventies = new Task({
    taskTitle: "Algorithms",
  	desc: "Love is tough",
  	category: "Work In Progress",
  	completion: "30%",
    priority: "High"
  });


  /*
   * First we'll add a few Tasks. Nothing is required to create the
   * Tasks collection; it is created automatically when we insert.
   */
  seventies.save();

  /*
   * Then we need to give Boyz II Men credit for their contribution
   * to the hit "One Sweet Day".
   */

 });


/*
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var fs = require('fs');

var path = require('path');

var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/core';

mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});

var models_path = path.join(__dirname, './../models')

fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
  }
});
*/
