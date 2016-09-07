var React = require('react');
var {Modal} = require('react-bootstrap')

var ModalNewTask = React.createClass({
  getInitialState: function () {
    return {
        taskTitle: "",
        desc: "",
        category: "",
        completion: ""
    }
  },
  getDefaultProps: function(){
    return {
      showModal: false
    }
  },
  createNewTask: function(e){
    e.preventDefault();
    console.log(this.refs.taskTitle.value);

    this.setState({
      taskTitle: this.refs.taskTitle.value,
      desc: this.refs.desc.value,
      category: this.refs.category.value,
      completion: this.refs.completion.value
    }, function(){
      var newTask = this.state;

      console.log('acquired data: ', this.state)
      $.post( "/newTask", newTask, function(  ) {
          console.log('expect to have a new task')
        });
    });

    this.props.onHandleClick();
  },
  render: function(){
    return (
      <Modal
        aria-labelledby='modal-label'
        show={this.props.showModal}
      >
        <form onSubmit={this.createNewTask}>
          <div className="form-group">
            <label for="taskTitle">Task Title:</label>
            <input type="text" className="form-control" ref="taskTitle"/>
          </div>
          <div className="form-group">
            <label for="desc">Description:</label>
            <input type="text" className="form-control" ref="desc"/>
          </div>
          <div className="form-group">
            <label for="desc">Category:</label>
            <input type="text" className="form-control" ref="category"/>
          </div>
          <div className="form-group">
            <label for="completion">Completion:</label>
            <input type="text" className="form-control" ref="completion"/>
          </div>
          <div className="form-group">
            <label for="image">Description:</label>
            <input type="text" className="form-control" ref="image"/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>

    </Modal>
    )
  }
});

module.exports = ModalNewTask;

// technologies: [String],
// urls: [String],
// : String,
// priority: String
