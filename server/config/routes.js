var tasks = require('../controllers/Tasks.js');
var techs = require('../controllers/Techs.js')

module.exports = function(app){
   app.get('/', function(req, res){

   });

   app.get('/wip', function(req, res){
     tasks.getCurrent(req, res);
   });

   app.get('/on-hold', function(req, res){
     tasks.getOnHold(req, res);
   });

   app.get('/completed', function(req, res){
     tasks.getCompleted(req, res);
   });

   app.post('/newTask', function(req, res){
     tasks.newTask(req, res);
   })

   app.get('/techs', function(req, res){
     techs.getAll(req, res);
   })
}
