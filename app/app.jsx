var React = require('react'),
    ReactDOM = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var TasksList = require('TasksList');
var WorkStation = require('WorkStation');

ReactDOM.render(
  <div>
    <Router history={hashHistory} >
      <Route path="/" component={Main} >
        <Route path="workstation" component={WorkStation}></Route>
        <Route path="tasks/:stage" component={TasksList}></Route>
        <IndexRoute component={TasksList}></IndexRoute>
      </Route>
    </Router>
  </div>
  ,
  document.getElementById('app')
)
