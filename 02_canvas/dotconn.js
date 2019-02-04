var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var clearButton = document.getElementById("clear");
var toggleButton = document.getElementById("toggle");

clearButton.addEventListener('click', function (e) {
	ctx.clearRect(0, 0, canvas.width, canvas.width);	
})
var prevX = -1;
var prevY = -1;
var drawConnectingLine = false;
canvas.addEventListener('click', function(e) {
	if (!drawConnectingLine) {
		ctx.beginPath();
		ctx.arc(e.offsetX, e.offsetY, 15, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.stroke();
		drawConnectingLine = true;
	} else {
		ctx.beginPath();
		ctx.moveTo(prevX,prevY);
		ctx.lineTo(e.offsetX,e.offsetY);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(e.offsetX, e.offsetY, 15, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.stroke();
	}
	prevX = e.offsetX;
    prevY = e.offsetY;
})