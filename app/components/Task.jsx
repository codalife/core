var React = require('react');
var {Link} = require('react-router');

var TechImage = require('TechImage')

var Task = React.createClass({
  render: function(){
    var {technologies} = this.props

    var renderTechnologies = function(){

      if(technologies.length > 0){
        return technologies.map( (technology) => {
          return (
            <TechImage key={technology.name} {...technology}/>
          )
         })
      } else {
        return <p>No info on technologies</p>
      }

    };

    return (
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <Link to="/">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={this.props.video}></iframe>
            </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="20"
              aria-valuemin="0" aria-valuemax="100" style={{width : this.props.completion}}>
                {this.props.completion}
              </div>
            </div>
          </Link>
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
