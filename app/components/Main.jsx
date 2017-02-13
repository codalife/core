var React = require('react');

var Nav = require('Nav');
var Footer = require('Footer');
var OddBall = require('OddBall');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <Nav seeOtherProjects = {this.changeProjects}/>
        {this.props.children}
        <OddBall/>
        <Footer/>
      </div>
    )
  }
});

module.exports = Main;
