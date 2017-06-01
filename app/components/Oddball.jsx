var React = require('react');
var GameModalInstrusction = require('GameModalInstrusction');
var ModalRightSol = require('ModalRightSol');
var LuckModal = require('LuckModal')
var ModalWrong = require('ModalWrong')

class OddBall extends React.Component{
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
	}
	componentWillUnmount() {
		var scripts = document.body.getElementsByTagName('script')
		// console.log(scripts)

    	for(var i=scripts.length-1; i>=2 ; i--){
    		console.log(scripts[i])
    		document.body.removeChild(scripts[i]);
    	}
    }
	render(){
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
			<GameModalInstrusction ref='GameModalInstrusction'/>
			<ModalRightSol ref="ModalRightSol"/>
			<LuckModal ref="LuckModal"/>
			<ModalWrong ref="ModalWrong"/>
			<button className='hidden' id='instruction' onClick={() => this.refs.GameModalInstrusction.openModal()}>Open Modal</button>
			<button className='hidden' id='rightSolution' onClick={() => this.refs.ModalRightSol.openModal()}>Open Modal</button>
			<button className='hidden' id='lucky' onClick={() => this.refs.LuckModal.openModal()}>Open Modal</button>
			<button className='hidden' id='wrong' onClick={() => this.refs.ModalWrong.openModal()}>Open Modal</button>
			<div id="game" className="col-md-6 col-md-offset-3"></div>
			<div id="buttons" className="col-md-6 col-md-offset-3 assignment"></div>


		  </div>
		)
	}
};

module.exports = OddBall;
