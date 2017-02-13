var React = require('react');

var ToDoList = require('ToDoList');
var InfoSet = require('InfoSet');
var Dash = require('Dash');

var WorkStation = React.createClass({
  render: function(){
    return (
      <div>
        <img src="images/hang-in-there.jpeg" />
        <h1>Hang in there. This part of the app is coming soon</h1>
        <h2>WorkStation</h2>
          <ToDoList/>
          <InfoSet/>
          <Dash/>
      </div>
    )
  }
});

module.exports = WorkStation;
