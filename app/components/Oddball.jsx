var React = require('react');
var Modal = require('Modal')

var OddBall = React.createClass({
	componentWillMount() {

		const scriptD3 = document.createElement("script");
		const scriptGame = document.createElement("script");

	    scriptD3.src = "https://d3js.org/d3.v4.min.js";
	    scriptD3.async = true;

	    document.body.appendChild(scriptD3);

	   	scriptGame.src = "oddBallLogic.js";
	    scriptGame.async = true;

        scriptD3.onload = scriptD3.onreadystatechange = function() {
	      var rs = this.readyState;
	      if (rs && rs != 'complete' && rs != 'loaded') return;
	      try { document.body.appendChild(scriptGame); } catch (e) {}
	    };
	},
	render: function(){
		return (
		  <div id="gameHolder">
		  	<div className="col-md-6 col-md-offset-3 assignment">
				<h2>
					There are 8 balls, same weight, and 1 heavier.
				</h2>
				<h2>
					Find the odd ball using the scales only twice.
				</h2>
			</div>
			<div id="game" className="col-md-6 col-md-offset-3"></div>
			<div id="buttons" className="col-md-6 col-md-offset-3 assignment"></div>
			<Modal/>
		  </div>
		)
	}
});

module.exports = OddBall;