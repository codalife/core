var React = require('react');

var Nav = require('Nav');
var Footer = require('Footer');

var projectStatuses = ["WIP", "Frozen", "Completed"];

var Main = React.createClass({
  getInitialState: function(){
    return {
      withStatus: projectStatuses[0]
    }
  },
  watchOtherStatus: function(status){
    this.setState({
      withStatus: status
    })
  },
  render: function(){
    console.log(this.state.withStatus)
    return (
      <div>
        <Nav />
        {this.props.children}
        <Footer/>
      </div>
    )
  }
});

module.exports = Main;
