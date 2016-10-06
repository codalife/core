var React = require('react');
var {Modal} = require('react-bootstrap')

var TechButton = require('TechButton')

var ModalNewTask = React.createClass({
  getInitialState: function () {
    return {
        taskTitle: "",
        desc: "",
        category: "",
        completion: "0",
        technologies: [
          {
            name: "NodeJS",
            image: "node.png",
            active: false
          },
          {
            name: "React",
            image: "react.png",
            active: false
          },
          {
            name: "Mongo",
            image: "mongo.png",
            active: false
          },
          {
            name: "Heroku",
            image: "heroku.png",
            active: false
          },
          {
            name: "ue4",
            image: "ue4.jpeg",
            active: false
          }
        ]
    }
  },
  getDefaultProps: function(){
    return {
      showModal: false
    }
  },
  createNewTask: function(e){
    e.preventDefault();

    var newTask = {
      taskTitle: this.refs.taskTitle.value,
      desc: this.refs.desc.value,
      category: this.refs.category.value,
      completion: this.refs.completion.value + '%',
      video: this.refs.video.value,
      technologies: []
    }

    this.state.technologies.map( (technology) => {
      if(technology.active == true){
        newTask.technologies.push(technology)
      }
    })

    $.post( "/newTask", newTask, function(  ) {
        console.log('expect to have a new task')
      });

    this.setState({
      taskTitle: "",
      desc: "",
      category: "",
      completion: "0",
      technologies: [
        {
          name: "NodeJS",
          image: "node.png",
          active: false
        },
        {
          name: "React",
          image: "react.png",
          active: false
        },
        {
          name: "Mongo",
          image: "mongo.png",
          active: false
        },
        {
          name: "Heroku",
          image: "heroku.png",
          active: false
        },
        {
          name: "ue4",
          image: "ue4.jpeg",
          active: false
        }
      ]
    });

    this.props.onHandleClick();
  },
  changeCompletion: function(event){
    this.setState({completion: event.target.value});
  },
  close: function(){
    this.props.onHandleClick();
  },
  techButtonActiveToggle: function (name) {
    var updatedTechnologies = this.state.technologies.map((technology)=>{
      if( technology.name === name ){
        technology.active = !technology.active
      }
      return technology
    })

    this.setState({
      technologies: updatedTechnologies
    })
  },
  render: function(){
    var technologies = this.state.technologies
    var that = this

    var renderButtons = function(){
      return technologies.map( (technology) => {
        return (
            <TechButton handleToggle={that.techButtonActiveToggle} key={technology.name} {...technology}/>
        )
      } )
    }

    return (
      <Modal
        aria-labelledby='modal-label'
        show={this.props.showModal}

      >
        <form className='modal-form' onSubmit={this.createNewTask}>
          <div className="form-group">
            <label htmlFor="taskTitle">Task Title:</label>
            <input type="text" className="form-control" ref="taskTitle"/>
          </div>
          <div className="form-group">
            <label htmlFor="desc">Description:</label>
            <input type="text" className="form-control" ref="desc"/>
          </div>

          <div className="form-group">
            <label htmlFor="sel1">Category:</label>
            <select className="form-control" id="sel1" ref="category">
              <option>Work In Progress</option>
              <option>Completed</option>
              <option>On hold</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="video">Video URL:</label>
            <input type="text" className="form-control" ref="video"/>
          </div>

          <div className="form-group">
            <label htmlFor="git">GitHub:</label>
            <input type="text" className="form-control" ref="git"/>
          </div>

          <div className="form-group">
            <label htmlFor="demo">Demo:</label>
            <input type="text" className="form-control" ref="demo"/>
          </div>

          <div className="form-group">
              <label htmlFor="completion">Completion:</label>
              <p>{this.state.completion} %</p>
              <input type="range" step="5" min="0" max="100" className="form-control" ref="completion" value={this.state.completion} onChange={this.changeCompletion}/>
          </div>

          <div className="row button-holder">
            {renderButtons()}
          </div>


          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="submit" className="btn btn-default">Submit</button>
            <button type="button" onClick={this.close} className="btn btn-default">Cancel</button>
          </div>
        </form>
    </Modal>
    )
  }
});

module.exports = ModalNewTask;
