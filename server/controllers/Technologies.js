var mongoose = require('mongoose');

var Tech = mongoose.model('Tech');

module.exports = (function(){
  return {
    getAll: function(req, res){
      Tech.find({}, function(err, result){
         if(err) {
             console.log(err);
           } else {
             res.json(result);
           }
      });
    },
    newTechnology: function(req, res){
      var Tech= new Tech({
                            name: req.body.name,
                            image: req.body.image,
                        });
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
