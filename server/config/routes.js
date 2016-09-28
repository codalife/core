var tasks = require('../controllers/Tasks.js');

module.exports = function(app){
   app.get('/', function(req, res){

   });

   app.get('/test', function(req, res){
     tasks.getCurrent(req, res);
   });

   app.post('/newTask', function(req, res){
     tasks.newTask(req, res);
   })

}
