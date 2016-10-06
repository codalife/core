var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var taskSchema = new mongoose.Schema({
	taskTitle: String,
	desc: String,
	category: String,
	completion: String,
	technologies: [{type: Schema.Types.ObjectId, ref: 'Tech'}],
  urls: [String],
	video: String,
  image: String,
  priority: String
});

var Task = mongoose.model('Task', taskSchema);
