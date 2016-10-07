var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var techSchema = new mongoose.Schema({
	name: String,
  image: String
});

var Tech = mongoose.model('Tech', techSchema);
