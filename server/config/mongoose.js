var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

var mongodbUri = 'mongodb://heroku_k0dtzmqq:at5qathe8ond94jupiuh60df9@ds041506.mlab.com:41506/heroku_k0dtzmqq';

// mongoose.set('debug', true);

mongoose.connect(mongodbUri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));


var models_path = path.join(__dirname, './../models')

fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
  }
});
