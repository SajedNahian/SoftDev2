var animateButton = document.getElementById("animate");
var stopButton = document.getElementById("stop");
var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var currentCircleSize = 1;
var speed = 5;
var increment = speed;
var id = -1;

animateButton.addEventListener('click', function (e) {
	if (id === -1) {
		id = window.requestAnimationFrame(draw);
	}
});
stopButton.addEventListener('click', function (e) { 
	if (id > 0) {
		window.cancelAnimationFrame(id);
		id = -1;
	}
});

var draw = function (e) {
	ctx.clearRect(0, 0, canvas.width, canvas.width);
	ctx.beginPath();
	if (currentCircleSize > 0) {
		ctx.arc(canvas.height / 2, canvas.width / 2, currentCircleSize, 0, 2 * Math.PI, false);
	}
	if (currentCircleSize >= canvas.width/2) {
		increment = -speed;
	}
	if (currentCircleSize <= 0) {
		increment = speed;
	}
	ctx.stroke();
	ctx.fill();
	currentCircleSize += increment;
	id = window.requestAnimationFrame(draw);
}

