var React = require('react');

var ToDoList = require('ToDoList');
var InfoSet = require('InfoSet');
var Dash = require('Dash');

var WorkStation = React.createClass({
  render: function(){
    return (
      <div>
        <h2>WorkStation</h2>
          <ToDoList/>
          <InfoSet/>
          <Dash/>
      </div>
    )
  }
});

module.exports = WorkStation;
