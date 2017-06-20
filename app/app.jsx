var React = require('react'),
    ReactDOM = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory, Redirect} = require('react-router');

var Main = require('Main');
var TasksList = require('TasksList');
var WorkStation = require('WorkStation');
var OddBall = require('OddBall');

ReactDOM.render(
  <div>
    <Router history={hashHistory} >
      <Route path="/" component={Main} >
        <Route path="workstation" component={WorkStation}></Route>
        <Route path="tasks/:stage" component={TasksList}></Route>
        <Route path="game" component={OddBall}></Route>
        <Route path="blog" component={Blog}></Route>
        <IndexRoute component={OddBall}></IndexRoute>
      </Route>
    </Router>
  </div>
  ,
  document.getElementById('app')
)
