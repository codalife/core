var React = require('react');
var Task = require('Task');
var ModalNewTask = require('ModalNewTask');

var TasksList = React.createClass({
  getInitialState: function(){
    return {
      tasks: []
    }
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
 loadTasksFromServer: function() {
    var url = "/" + this.props.params.stage;

    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function(response) {
       //  var arr = JSON.parse(tasks);
        this.setState({tasks: response});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });
  },
 render: function(){
   var tasks = this.state.tasks;
   var that = this;

   console.log("the params is: ",this.props.params.stage )

   if( this.props.params.stage != this.state.stage ){
     this.loadTasksFromServer();
     this.state.stage = this.props.params.stage;
   }

   var renderTasks = function(){
     return tasks.map((task) => {
       return (
         <Task
          key={task._id}
          taskTitle={task.taskTitle}
          desc={task.desc}
          category={task.category}
          technologies={task.technologies}
          completion={task.completion}
          />
      )})
   };

   var renderModal = function(){
     if (that.state.createNewTask){
       return (
         <ModalNewTask/>
       )
     }
   };

   var message = ""
   switch (this.props.params.stage) {
     case "wip":
       message = "Projects I am working on now"
       break;
     case "completed":
       message = "Finished projects"
       break;
     case "on-hold":
       message = "Something to work on later"
       break;
     default:

   }

   return (
     <div className="container-fluid box">
       <div className="container text-center">
         <div className="col-md-10"><h1>{message}</h1></div>
         <div className="col-md-2"><button type="button" className="btn btn-default" onClick={this.wantModal}>Create new</button></div>
     </div>
      {renderTasks()}
      <ModalNewTask showModal={this.state.createNewTask} onHandleClick={this.dontWantModal}/>
    </div>
   )
 }
});

module.exports = TasksList;
