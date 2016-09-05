var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" to="#">AnuarCORE</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><Link to="#">Home</Link></li>
            <li><Link to="#">Work in Progress</Link></li>
            <li><Link to="#">Completed</Link></li>
            <li><Link to="#">On hold</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
});

module.exports = Nav;
