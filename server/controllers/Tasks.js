/*
var mongoose = require('mongoose');

var Task = mongoose.model('task');

module.exports = (function(){
  return {
    getCurrent: function(req, res){
      Task.find({}, function(err, result){
         if(err) {
             console.log(err);
           } else {
             res.json(result);
           }
      });
    },
    newTask: function(req, res){
      console.log(req.body)
      var task = new Task({taskTitle: req.body.taskTitle,
                            desc: req.body.desc,
                            category: req.body.category,
                            completion: req.body.completion});
			task.save(function(err){
				if(err){
					console.log('saving failed');
				} else{
					res.json('success');
				}
			})
    }
  }
})();
*/
