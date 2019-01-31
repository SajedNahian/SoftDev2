var canvas = document.getElementById("slate")
var ctx = canvas.getContext("2d")
var clearButton = document.getElementById("clear")
var toggleButton = document.getElementById("toggle")
var currentStyle = "dot"

clearButton.addEventListener('click', function (e) {
	ctx.clearRect(0, 0, canvas.width, canvas.width);	
})

toggleButton.addEventListener('click', function (e) {
	toggleButton.innerHTML = `Switch to ${currentStyle.charAt(0).toUpperCase() + currentStyle.slice(1)} Mode`
	currentStyle = currentStyle === "dot" ? "rectangle" : "dot"
})

canvas.addEventListener('click', function(e) {
	var rect = canvas.getBoundingClientRect();
	var x = e.clientX - rect.left
	var y = e.clientY - rect.top
	if (currentStyle === "rectangle") {
		ctx.fillRect(x, y, 10, 10)
	} else {
		ctx.beginPath();
		ctx.ellipse(x, y, 5, 5, Math.PI / 4, 0, 2 * Math.PI);
		ctx.stroke();
	}
})
