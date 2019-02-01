var canvas = document.getElementById("slate")
var ctx = canvas.getContext("2d")
var clearButton = document.getElementById("clear")
var toggleButton = document.getElementById("toggle")
var currentStyle = "dot"

clearButton.addEventListener('click', function (e) {
	ctx.clearRect(0, 0, canvas.width, canvas.width);	
})

toggleButton.addEventListener('click', function (e) {
	currentStyle = currentStyle === "dot" ? "rectangle" : "dot"
})

canvas.addEventListener('click', function(e) {
	var rect = canvas.getBoundingClientRect();
	// e.clientX and e.clientY are properties that show the mouse's relative X and Y positon respectively
	var x = e.clientX - rect.left
	var y = e.clientY - rect.top
	if (currentStyle === "rectangle") {
		ctx.fillRect(x, y, 10, 10)
	} else {
		// ctx.beginPath() starts a clean path -- in this case prevents lines from connecting the ellipses
		ctx.beginPath();
		ctx.ellipse(x, y, 5, 5, Math.PI / 4, 0, 2 * Math.PI);
		ctx.stroke();
	}
})

canvas.addEventListener('mousedown', function (e) {
	//prevents default action of event (in this case double mouse selects all text which is annoying when trying to draw in the canvas)
	e.preventDefault(); 
})
