var React = require('react');

var Nav = require('Nav');
var Footer = require('Footer');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <Nav seeOtherProjects = {this.changeProjects}/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
});

module.exports = Main;
