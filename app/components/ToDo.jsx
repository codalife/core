var React = require('react');

var ToDo = React.createClass({
  render: function(){
    return (
      <div>
        <h3>description:</h3>
        <p>Start: </p>
        <p>Deadline:</p>
      </div>
    )
  }
});

module.exports = ToDo;
