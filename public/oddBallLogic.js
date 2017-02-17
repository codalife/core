/*
 _____  ____  ____   ___        ______  __ __    ___       ___   ___    ___        ____    ____  _      _
|     |l    j|    \ |   \      |      T|  T  T  /  _]     /   \ |   \  |   \      |    \  /    T| T    | T
|   __j |  T |  _  Y|    \     |      ||  l  | /  [_     Y     Y|    \ |    \     |  o  )Y  o  || |    | |
|  l_   |  | |  |  ||  D  Y    l_j  l_j|  _  |Y    _]    |  O  ||  D  Y|  D  Y    |     T|     || l___ | l___
|   _]  |  | |  |  ||     |      |  |  |  |  ||   [_     |     ||     ||     |    |  O  ||  _  ||     T|     T
|  T    j  l |  |  ||     |      |  |  |  |  ||     T    l     !|     ||     |    |     ||  |  ||     ||     |
l__j   |____jl__j__jl_____j      l__j  l__j__jl_____j     \___/ l_____jl_____j    l_____jl__j__jl_____jl_____j

*/

// precautiously removing event listener for click
document.removeEventListener('click', guess)

// ----------------------------------- SVG and BACKGROUND --------------------------------------------
var height = 430
var width = 800

var svg = d3.select('#game')
			.append('svg')
			.attr('width', width)
			.attr('height', height)

var canvas = svg.append('rect')
			.attr('width', '100%')
			.attr('height', '100%')
			.attr('fill', '#4e83ab')
// ----------------------------------------------------------------------------------------------
// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

//---------------------------------IMAGES-----------------------------------------------

var binCoordinates = {x: 715, y: 340}

 var bin =   svg
  .append('image')
  .attr('xlink:href','binBlueBG.jpg')
  .attr('height', '80')
  .attr('width', '80')
  .attr('x', binCoordinates.x)
  .attr('y', binCoordinates.y)
//-----------------------------------------------------------------------------------------------
// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*


//---------------------------------GRADIENT COLORS-----------------------------------------------

var defs = svg.append("defs")
var steel = defs.append("radialGradient").attr('id', 'metal')
var copper = defs.append("radialGradient").attr('id', 'copper')

steel.append("stop").attr("offset", "0%").style("stop-color", "white");
steel.append("stop").attr("offset", "100%").style("stop-color", "#black");

copper.append("stop").attr("offset", "0%").style("stop-color", "#655a5a");
copper.append("stop").attr("offset", "100%").style("stop-color", "gray");

// ----------------------------------------------------------------------------------------------
// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

//---------------------------------INFO BOARD-----------------------------------------------
var numOfBallsOnLeftFirst = 0;
var numOfBallsOnRightFirst = 0;

var numOfBallsOnLeftSecond = 0;
var numOfBallsOnRightSecond = 0;

var message = [{text:"SCALES USAGES LEFT:", x: 50, y: 50, size: 30, fill: "#cc0000"}, //0
				{text: "2", x: 320, y: 50, size: 35, fill: "#cc0000"},				  //1
				{text: 'left side', x: 300, y: 90, size: 25, fill: 'black'},          //2
				{text: 'right side', x: 450, y: 90, size: 25, fill: 'black'},         //3
				{text: '', x: 600, y: 90, size: 25, fill: 'black'},         //4
				{text: 'first usage stats: ', x: 80, y: 120, size: 25, fill: 'black'},//5
				{text: 'second usage stats: ', x: 80, y: 170, size: 25, fill: 'black'}, //6
				{text: 0, x: 320, y: 120, size: 25, fill: 'black'}, //7  balls on left first go
				{text: 0, x: 470, y: 120, size: 25, fill: 'black'}, //8  balls on right first go
				{text: 0, x: 320, y: 170, size: 25, fill: 'black'}, //9  balls on left second go
				{text: 0, x: 470, y: 170, size: 25, fill: 'black'}, //10  balls on right second go
				{text: 'second usage stats: ', x: 80, y: 170, size: 25, fill: 'black'},  //11
				{text: 'second usage stats: ', x: 80, y: 170, size: 25, fill: 'black'},  //12
				]


var legend = svg.selectAll("text")
		.data(message)
		.enter()
		.append("text")
		.text(function(d){return d.text})
		.attr('x', d => d.x)
		.attr('y', d => d.y)
		.attr('font-size', d => d.size)
		.attr('fill', d => d.fill)

//-----------------------------------------------------------------------------------------------
// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

// -----------------------------------  BALLS --------------------------------------------
var balls = [{id: 0, odd:false},{id:1, odd:false},{id:2, odd:false},
    {id:3, odd:false}, {id:4, odd:false}, {id:5, odd:false},
    {id:6, odd:false}, {id:7, odd:false},{id:8, odd:false}];

var odd = parseInt(Math.random()*9)

balls[odd]['odd'] = true

var svgBalls = svg
			.selectAll('circle')
			.data(balls)
			.enter()
			.append('circle')
			.attr('r', 15)
			// .attr('x', function(d,i){return i*20+200})
			.attr('fill', 'url(#metal)')
			.attr('id', d=>d.id)

svgBalls
		    .call(d3.drag()
		        .on("start", dragstarted)
		        .on("drag", dragged)
		        .on("end", dragended));


// ----------------------------------------------------------------------------------------------
// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

// ----------------------------------- SIMULATION --------------------------------------------
var shiftRight = 180;

var simulation = d3.forceSimulation(balls)
			.force("collide", d3.forceCollide().radius(16))
			.force('y', d3.forceY(400).strength(0.75))

var ticked = function() {
     svgBalls
     	.attr("cx", function(d, i){ return d.x + shiftRight;})
        .attr("cy", function(d){ return d.y;})
}

simulation
	.on("tick", ticked);

// ----------------------------------------------------------------------------------------------
// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

// ----------------------------------- DRAGGING --------------------------------------------
function dragstarted(d) {
	simulation.restart();
    simulation.alpha(1.0);
	// d3.select(this)
	// 	.raise()
	// 	.classed("active", true);
}

function dragged(d, i) {
  d3.select(this)
  	.attr("cx", d.x = d3.event.x)
  	.attr("cy", d.y = d3.event.y);
}

function dragended(d, i) {
	// d3.select(this)
	// 	.classed("active", false);
	// console.log("Before remove: :", balls)

	if(d.x + shiftRight > binCoordinates.x){
		balls = balls.filter(d => d.id != i);

		var update = svg.selectAll('circle')
			.data(balls, d => d.id)
			.attr('fill', 'url(#metal)')

		update
			.exit()
			.transition()
			.duration(100)
			.remove()
	}


	simulation.alphaTarget(0.1);
	// console.log("After remove: :", balls)
}
// ----------------------------------------------------------------------------------------------
// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

// ----------------------------------- USING SCALES --------------------------------------------

var rightScalesLeftSide = 550;
var rightScalesRigthSide = 710;

var leftScalesLeftSide = 340;
var leftScalesRigthSide = 510;

function useScales(numOfBallsOnLeft, numOfBallsOnRight){

	var numOfBallsOnLeft = 0
	var numOfBallsOnRight = 0

	var text = d3.selectAll('text').data(message)
	console.log(parseInt(message[1]['text']))
	var inTheRightScale = false;
	var inTheLeftScale = false;

	var onLeft = svg.selectAll('circle')
			.filter(function(d, i){
				if(d.x > leftScalesLeftSide-shiftRight && d.x < leftScalesRigthSide-shiftRight){
					numOfBallsOnLeft ++
					if(d['odd'] === true){
						inTheLeftScale = true
					}
				}
				return d.x > leftScalesLeftSide-shiftRight && d.x < leftScalesRigthSide-shiftRight
			})

	var onRight = svg.selectAll('circle')
			.filter(function(d, i){
				if(d.x > rightScalesLeftSide-shiftRight && d.x < rightScalesRigthSide-shiftRight){
					numOfBallsOnRight ++
					if(d['odd'] === true){
						inTheRightScale = true
					}
				}
				return d.x > rightScalesLeftSide-shiftRight && d.x < rightScalesRigthSide-shiftRight
			})

	function skewLeft(){
			leftScales
				.transition()
					.duration(1000)
					.attr("transform", "translate(0, -40)")

			rightScales
				.transition()
					.duration(1000)
					.attr("transform", "translate(0, -60)")

			onLeft
				.transition()
					.duration(1000)
					.attr("transform", "translate(0, -40)")

			onRight
				.transition()
					.duration(1000)
					.attr("transform", "translate(0, -60)")

	}

	function skewRight(){
			leftScales
				.transition()
					.duration(1000)
					.attr("transform", "translate(0, -60)")

			rightScales
				.transition()
					.duration(1000)
					.attr("transform", "translate(0, -40)")

			onLeft
				.transition()
					.duration(1000)
					.attr("transform", "translate(0, -60)")

			onRight
				.transition()
					.duration(1000)
					.attr("transform", "translate(0, -40)")
	}

	function levelUp(){
			leftScales
				.transition()
					.duration(1000)
					.attr("transform", "translate(0, -50)")

			rightScales
				.transition()
					.duration(1000)
					.attr("transform", "translate(0, -50)")

			onLeft
				.transition()
					.duration(1000)
					.attr("transform", "translate(0, -50)")

			onRight
				.transition()
					.duration(1000)
					.attr("transform", "translate(0, -50)")
	}


	console.log(numOfBallsOnLeft, numOfBallsOnRight)

	if(numOfBallsOnLeft === numOfBallsOnRight){
		if(inTheLeftScale){
			skewLeft()
		}
		else if(inTheRightScale){
			skewRight()
		}
		else{
			levelUp()
		}
	} else if(numOfBallsOnLeft > numOfBallsOnRight){
		skewLeft()
	} else if (numOfBallsOnLeft < numOfBallsOnRight){
		skewRight()
	}

	if(parseInt(message[1]['text']) === 2){
		setTimeout(function(){
			document.getElementById('instruction').click()

		}, 1000);

		message[7]['text'] = numOfBallsOnLeft
		message[8]['text'] = numOfBallsOnRight
	}
	if(parseInt(message[1]['text']) === 1){
		setTimeout(function(){
			// alert("Toss non-odd balls in the bin.");

		}, 1000);

		message[9]['text'] = numOfBallsOnLeft
		message[10]['text']  = numOfBallsOnRight
	}

	message[1]['text'] = parseInt(message[1]['text'])-1;


	// if(parseInt(message[1]['text']) < 1){
	// 	message[1]['text'] = "over the limit"
	// 	setTimeout(function(){ alert("Game over");}, 1000);
	// }
	var update = svg.selectAll('text')
			.data(message)
			.text(d=>d.text)
}
// ----------------------------------------------------------------------------------------------
// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

//---------------------------------DRAWING SCALES -----------------------------------------------
var rightScales = svg.append('g')
var leftScales = svg.append('g')

function drawScales(){
	var rightScalesCoordinartes = [[{x: rightScalesLeftSide, y:410}, {x: rightScalesRigthSide, y:410}, {x:rightScalesRigthSide-20,y:420}, {x:rightScalesLeftSide+20,y:420}]];

	var d3DataRightScales = rightScalesCoordinartes.map(function(point){
	    return point.reduce(function(s, n){return s + ', ' + n.x + ',' + n.y}, '').substr(2)
	});

	rightScales
		.selectAll("polygon")
	    .data(d3DataRightScales)
	    .enter()
	    .append("polygon")
	    .style("stroke", "#383434")
	    .style("fill", 'url(#copper)')
	    .attr("points", (d) =>{ return d});

	var leftScalesCoordinartes = [[{x: leftScalesLeftSide, y:410}, {x: leftScalesRigthSide, y:410}, {x:leftScalesRigthSide-20,y:420}, {x:leftScalesLeftSide+20,y:420}]];

	var d3DataLeftScales = leftScalesCoordinartes.map(function(point){
	    return point.reduce(function(s, n){return s + ', ' + n.x + ',' + n.y}, '').substr(2)
	});



	leftScales
		.selectAll("polygon")
	    .data(d3DataLeftScales)
	    .enter()
	    .append("polygon")
	    .style("stroke", "#383434")
	    .style("fill", 'url(#copper)')
	    .attr("points", (d) =>{ return d});
}
drawScales()
//-----------------------------------------------------------------------------------------------
// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

//---------------------------------STEP 2-----------------------------------------------
function readyForStepTwo(){

	svg.selectAll('circle')
		.filter(d => d.x > 100)
		.attr('cx', function(d){
			d.x = Math.random()*30
		})
		.attr('transform', 'translate(0, 0)')

	leftScales.attr('transform', 'translate(0, 0)')

	rightScales.attr('transform', 'translate(0, 0)')
}
//-----------------------------------------------------------------------------------------------
// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
function pick(){
	var target;
	document.addEventListener('click', guess)
}

function guess(e) {
	    e = e || window.event;

	    d3.select('#game').classed('target', true)

	    var target = e.target || e.srcElement
		if(target){
			console.log(target.tagName)
		}

		var theChosenOne = document.getElementById(odd);
		if(theChosenOne === target){
			if(parseInt(message[7].text) === 3 && parseInt(message[8].text) === 3
				&& parseInt(message[9].text) === 1 && parseInt(message[10].text) === 1 ){
				document.getElementById('rightSolution').click()
				// alert("That's the right solution! You are amazing!")
			} else {
				alert('Lucky you')
			}
		} else if(target.tagName === 'circle') {
			alert('Try again. You can do it.')
		}
}
//---------------------------------BUTTONS-----------------------------------------------
var buttons = [
	{name: "Use Scales", x: 60, y: 460, width: 100, height: 50, fun: useScales},
	{name: "Next step", x: 180, y: 460, width: 100, height: 50, fun: readyForStepTwo},
	{name: "Pick the odd ball", x: 300, y: 460, width: 150, height: 50, fun: pick}
]

var buttonsSVG = d3.select('#buttons').selectAll('a')
	.data(buttons, function(d, i){
		return d ? d.name : this
	})
	.enter()
	.append('a')
	.attr('type', 'button')
	.attr('class', 'btn btn-primary btn-lg')
	.html(d=>d.name)
		.on('click', function(d){
			d.fun()
		})

function drawButton(selection) {

	selection.each(function(d, i) {
		// console.log(d)
		  var g = d3.select(this)
		      .attr('id', 'd3-button' + i)

		  var rect = g.append('rect')
		      .attr("x", d.x - 20)
		      .attr("y", d.y - 30)
		      .attr("width", d.width)
		      .attr("height", d.height)

   		  var text = g.append('text')
		  		.attr('x', d.x)
		  		.attr('y', d.y)
		  		.text(d.name)
		  		.attr('fill', 'white')

	});
}
//-----------------------------------------------------------------------------------------------
// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
