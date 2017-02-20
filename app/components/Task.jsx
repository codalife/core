var React = require('react');
var {Link} = require('react-router');

var TechImage = require('TechImage');
var Modal = require('Modal');

var Task = React.createClass({
  openModal: function(){
    if(this.props.pic === "images/pmg.png"){
      document.getElementById('pmg').click()
    } else if(this.props.pic === "images/arsenal.png"){
      document.getElementById('arsenal').click()
    }
  },
  render: function(){
    var {technologies} = this.props

    var imageOrIframe

    if( this.props.video){
      imageOrIframe = (
        <div onClick={this.openModal()} className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item"  src={this.props.video}></iframe>
        </div>
        )
    } else {
      imageOrIframe = (
          <img onClick={this.openModal} src={this.props.pic}/>
        )
    }

    var renderTechnologies = function(){
      if(technologies.length > 0){
        return technologies.map( (technology) => {
          return (
            <TechImage key={technology.name} {...technology}/>
          )
         })
      } else {
        return
      }

    };

    return (
      <div className="col-sm-12 col-md-4">
        <div className="thumbnail">

            {imageOrIframe}
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="20"
              aria-valuemin="0" aria-valuemax="100" style={{width : this.props.completion}}>
                {this.props.completion}
              </div>
            </div>

          <p>
            <a href="https://github.com/AnuarBJJ" className="btn btn-primary" role="button">GitHub</a>
            <a href="/" className="btn btn-default" role="button">Demo</a>
          </p>
          <Link to="/workstation">
            <h3>{this.props.taskTitle}</h3>
          </Link>
          <div className="caption white">
            <p>{this.props.desc}</p>
          </div>
          <div className="row button-holder">
            {renderTechnologies()}
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Task;
