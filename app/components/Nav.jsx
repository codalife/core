var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  changeStatusOfInterest: function(e){
    e.preventDefault();
    this.props.seeOtherProjects(e.target.text)
  },
  render: function(){
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" to="#">AnuarCORE</a>
          </div>
          <ul className="nav navbar-nav">
            <li><a href="" onClick={this.changeStatusOfInterest}>Work in Progress</a></li>
            <li><a href=""  onClick={this.changeStatusOfInterest}>Completed</a></li>
            <li><a href=""  onClick={this.changeStatusOfInterest}>On hold</a></li>
          </ul>
        </div>
      </nav>
    )
  }
});

module.exports = Nav;
