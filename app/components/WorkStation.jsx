var React = require('react');
var ToDoList = require('ToDoList');

var WorkStation = React.createClass({
  render: function(){
    return (
      <div>
        <h2>WorkStation</h2>
        <ToDoList/>
      </div>
    )
  }
});

module.exports = WorkStation;
