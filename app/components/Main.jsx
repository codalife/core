var React = require('react');

var Nav = require('Nav');
var Footer = require('Footer');

var projectsStatus = ["wip", "on-hold", "completed"];

var Main = React.createClass({
  getInitialState: function(){
    return {
      stage: 'wip'
    }
  },
  changeProjects: function(stage){
    this.setState({
      stage: stage
    })
  },
  render: function(){
    var {stage} = this.state;

    var childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       stage: stage
     })
    );

    return (
      <div>
        <Nav seeOtherProjects = {this.changeProjects}/>
        {childrenWithProps}
        <Footer/>
      </div>
    )
  }
});

module.exports = Main;
