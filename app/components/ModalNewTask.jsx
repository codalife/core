var React = require('react');
var {Modal} = require('react-bootstrap')

var ModalNewTask = React.createClass({
  getInitialState: function () {
    return {
        taskTitle: "",
        desc: "",
        category: "",
        completion: "0"
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
  changeCompletion: function(event){
    this.setState({completion: event.target.value});
  },
  render: function(){
    return (
      <Modal
        aria-labelledby='modal-label'
        show={this.props.showModal}

      >
        <form className='modal-form' onSubmit={this.createNewTask}>
          <div className="form-group">
            <label for="taskTitle">Task Title:</label>
            <input type="text" className="form-control" ref="taskTitle"/>
          </div>
          <div className="form-group">
            <label for="desc">Description:</label>
            <input type="text" className="form-control" ref="desc"/>
          </div>

          <div className="form-group">
            <label for="sel1">Select list:</label>
            <select className="form-control" id="sel1" ref="category">
              <option>Work In Progress</option>
              <option>Completed</option>
              <option>On hold</option>
            </select>
          </div>

          <div className="form-group">
              <label for="completion">Completion:</label>
              <p>{this.state.completion}</p>
              <input type="range" step="5" min="0" max="100" className="form-control" ref="completion" onChange={this.changeCompletion}/>
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
