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
    var url = "";
    if(this.props.stage == "Work in Progress"){
      url = "/wip"
    } else if ( this.props.stage == "On hold" ){
      url = "/on-hold"
    } else if ( this.props.stage == "Completed" ){
      url = "/completed"
    } else {
      url = "/wip"
    }
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

   if( this.props.stage != this.state.stage ){
     this.loadTasksFromServer();
     this.state.stage = this.props.stage;
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
