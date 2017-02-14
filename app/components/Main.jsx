var React = require('react');

var Nav = require('Nav');
var Footer = require('Footer');
var OddBall = require('OddBall');

var Main = React.createClass({
  componentWillMoiunt(){
    document.getElementById('startGame').click()
  },
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
