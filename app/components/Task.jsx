var React = require('react');
var {Link} = require('react-router');

var Task = React.createClass({
  render: function(){
    var {technologies} = this.props
    // console.log(techs)
    // var technologies = JSON.parse(techs)
    //
    // console.log(this.props)

    var renderTechnologies = function(){

      if(technologies.length > 0){
        var id = 0;
        return technologies.map( (technology) => {
          return <img key={id++} src={technology.image}/>
         })
      } else {
        return <p>No info on technologies</p>
      }

    };

    return (
      <div className="col-sm-6 col-md-3">
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
            <ul>
              {renderTechnologies()}
            </ul>

          </div>
        </div>
      </div>
    )
  }
});

module.exports = Task;
