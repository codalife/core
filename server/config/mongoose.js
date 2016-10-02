var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

// var mongodbUri = 'mongodb://heroku_k0dtzmqq:at5qathe8ond94jupiuh60df9@ds041506.mlab.com:41506/heroku_k0dtzmqq';
//
// mongoose.connect(mongodbUri);
//
// var db = mongoose.connection;
//
// db.on('error', console.error.bind(console, 'connection error:'));


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
