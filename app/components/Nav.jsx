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
              <Link className="navbar-brand" id="startGame" to="/game">AnuarCORE</Link>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/tasks/wip" >Work in Progress</Link></li>
            <li><Link to="/tasks/completed" >Completed</Link></li>
            <li><Link to="/tasks/on-hold" >On hold</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
});

module.exports = Nav;
