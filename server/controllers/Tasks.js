var mongoose = require('mongoose');
var asyn = require('async');

var Task = mongoose.model('Task');
var Tech = mongoose.model('Tech');

module.exports = (function(){
  return {
    getCurrent: function(req, res){
      console.log('here')
      Task.find({category: "Work In Progress"})
          .populate('technologies')
          .exec(function(err, result){
            if(err){
              console.log(err)
              return
            }
            res.json(result)
          })

    },
    getCompleted: function(req, res){
      Task.find({category: "Completed"}, function(err, result){
         if(err) {
             console.log(err);
           } else {
             res.json(result);
           }
      });
    },
    getOnHold: function(req, res){
      Task.find({category: "On hold"}, function(err, result){
         if(err) {
             console.log(err);
           } else {
             res.json(result);
           }
      });
    },
    newTask: function(req, res){
      var technologies = []
      var calls = [];

      var task = new Task({taskTitle: req.body.taskTitle,
                            desc: req.body.desc,
                            category: req.body.category,
                            completion: req.body.completion,
                            video: req.body.video});

      req.body.technologies.forEach(function(technology){
          calls.push(function(callback) {
            Tech.findOne({name: technology.name}, function(err, tech){
              console.log("found: ", tech)
              if(err){
                console.log(err)
              }
              technologies.push(tech._id)
              console.log(technologies)
              callback()
            })
          }
      )});

      asyn.parallel(calls, function(err) {
          /* this code will run after all calls finished the job or
             when any of the calls passes an error */
          if (err) {
            return console.log(err);
          }

          task.technologies = technologies
          task.save(function(err){
            if(err){
              console.log('saving failed');
            } else{
              res.json('success');
            }
          })
      });


    }
  }
})();
