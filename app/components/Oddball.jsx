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
		  <div>
		  	<div className="col-md-6 col-md-offset-3">
				<p>
					You have 9 balls, equally big, equally heavy except for one, which is a little heavier.
				</p>
				<p>
					How would you identify the heavier ball if you could use a pair of balance scales only twice?
				</p>
			</div>
			<div id="game" className="col-md-4 col-md-offset-3"></div>
			<Modal/>
		  </div>
		)
	}
});

module.exports = OddBall;