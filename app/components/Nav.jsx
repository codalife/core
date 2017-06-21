var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  changeStatusOfInterest: function(e){
    e.preventDefault();
    this.props.seeOtherProjects(e.target.text)
  },
  render: function(){
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
              <Link className="navbar-brand" id="startGame" to="/game">anuar_CORE</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/tasks/wip" >work in progress</Link></li>
            <li><Link to="/tasks/completed" >completed</Link></li>
            <li><Link to="/tasks/on-hold">on hold</Link></li>
            <li><Link to="/blog">blog</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
});

module.exports = Nav;
