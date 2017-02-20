var mainLink = document.getElementById("startGame")
var innerHTML = mainLink.innerHTML

mainLink.addEventListener("mouseenter", function( event ) {

	var i = 0

	var funky = setInterval(function(){
		var text = '';
		if(innerHTML.charAt(i) === innerHTML.charAt(i).toUpperCase()){
			text = innerHTML.substring(0, i) + innerHTML.charAt(i).toLowerCase() + innerHTML.substring(i+1, innerHTML.length)
		} else {
			text = innerHTML.substring(0, i) + innerHTML.charAt(i).toUpperCase() + innerHTML.substring(i+1, innerHTML.length)
		}
		document.getElementById("startGame").innerHTML = text;

		i ++;
		if(i>innerHTML.length){
			clearInterval(funky)
		}
	}, 50);

}, false);