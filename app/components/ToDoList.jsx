var React = require('react');

var ToDo = require('ToDo');

var ToDoList = React.createClass({
  getInitialState: function(){
    return {
      ToDos: ["Have fun", "Eat well"]
    }
  },
  render: function(){
    var ToDos = this.state.ToDos;

    var renderToDos = function(){
      if(ToDos.length > 0){
        return ToDos.map( (todo) => {
          return (
            <ToDo/>
          )
        })
      } else {
        return
      }
    };
    return (
      <div>
        <h3>To Do List:</h3>
        {renderToDos()}
      </div>
    )
  }
});

module.exports = ToDoList;
