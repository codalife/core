var React = require('react');
var Task = require('Task');
var ModalNewTask = require('ModalNewTask');

var TasksList = React.createClass({
  loadTasksFromServer: function() {
   $.ajax({
     url: '/test',
     dataType: 'json',
     cache: false,
     success: function(response) {
       console.log(response)
      //  var arr = JSON.parse(tasks);
       this.setState({tasks: response});
      console.log(this.state.tasks);
     }.bind(this),
     error: function(xhr, status, err) {
       console.error(status, err.toString());
     }.bind(this)
   });
 },
 getInitialState: function() {
   return {
     tasks: [],
     createNewTask: false
   };
 },
 componentDidMount: function() {
   this.loadTasksFromServer();
 },
 wantModal: function(){
   this.setState({
     createNewTask: true
   })
 },
 dontWantModal: function(){
   this.setState({
     createNewTask: false
   })
 },
 render: function(){
   var tasks = this.state.tasks;
   var that = this;

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

   var renderModal = function(){

     console.log(that.state)
     if (that.state.createNewTask){
       console.log('one step closer')
       return (
         <ModalNewTask/>
       )
     }

   };

   return (
     <div className="container-fluid box">
       <div className="container text-center">
         <div className="col-md-10"><h1>Projects I am working on now</h1></div>
         <div className="col-md-2"><button type="button" className="btn btn-default" onClick={this.wantModal}>Create new</button></div>
     </div>
      {renderTasks()}
      <ModalNewTask showModal={this.state.createNewTask} onHandleClick={this.dontWantModal}/>
    </div>
   )
 }
});

module.exports = TasksList;
