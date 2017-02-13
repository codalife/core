var React = require('react');

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
		  <div className="col-md-4 col-md-offset-3" >

		  		<a onClick="useScales()" id='use' className="myButton">Use scales</a>
				<a onClick="readyForStepTwo()" id='step2' className="myButton">Step 2</a>
				<a onClick="pick()" className="myButton">Ready to pick</a>
				<div id="game"></div>
		  </div>
		)
	}
});

module.exports = OddBall;