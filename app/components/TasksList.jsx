var React = require('react');
var Task = require('Task');

var TasksList = React.createClass({
  loadTasksFromServer: function() {
   $.ajax({
     url: '/test',
     dataType: 'json',
     cache: false,
     success: function(response) {
      //  var arr = JSON.parse(tasks);
       this.setState({tasks: response.tasks});
      console.log(this.state.tasks);
     }.bind(this),
     error: function(xhr, status, err) {
       console.error(status, err.toString());
     }.bind(this)
   });
 },
 getInitialState: function() {
   return {tasks: []};
 },
 componentDidMount: function() {
   this.loadTasksFromServer();
 },

 render: function(){
   var tasks = this.state.tasks;

   var renderTasks = function(){
     return tasks.map((task) => {
       return (
         <Task
          key={task.id}
          taskTitle={task.taskTitle}
          desc={task.desc}
          category={task.category}
          technologies={task.technologies}
          completion={task.completion}
          />
      )})
   };

   return (
     <div className="container-fluid box">
       <div className="container text-center">
         <h1>Projects I am working on now</h1>
       </div>
      {renderTasks()}
    </div>
   )
 }
});

module.exports = TasksList;
