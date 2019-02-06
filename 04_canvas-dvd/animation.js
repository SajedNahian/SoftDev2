// General
var circleButton = document.getElementById("circle");
var stopButton = document.getElementById("stop");
var canvas = document.getElementById("slate");
var dvdButton = document.getElementById("dvd");
var ctx = canvas.getContext("2d");
var id = -1;

stopButton.addEventListener('click', function (e) { 
	if (id > 0) {
		window.cancelAnimationFrame(id);
		id = -1;
	}
});

// DVD 
var logo = new Image();
logo.src = "logo_dvd.jpg";

dvdButton.addEventListener('click', function (e) {
	if (id === -1) {
		id = window.requestAnimationFrame(drawDVD);
	}
});

var dvdSpeed = 5;
var xVel = Math.random() < .5 ? dvdSpeed : -dvdSpeed;
var yVel = Math.random() < .5 ? dvdSpeed : -dvdSpeed;
var rectWidth = 60;
var rectHeight = 40;
var curX = Math.floor(Math.random() * (canvas.width - rectWidth));
var curY = Math.floor(Math.random() * (canvas.height - rectHeight));

var drawDVD = function () {
	console.log(logo.width);
	ctx.clearRect(0, 0, canvas.width, canvas.width);
	ctx.beginPath();
	ctx.drawImage(logo, curX, curY, rectWidth, rectHeight);
	curX += xVel;
	curY += yVel;
	if (curX >= canvas.width - rectWidth || curX <= 0) {
		xVel = -xVel;	
	}
	if (curY <= 0 || curY >= canvas.height - rectHeight) {
		yVel = -yVel;
	}
	id = window.requestAnimationFrame(drawDVD);
}

// Circle
var currentCircleSize = 1;
var circleSpeed = 5;
var increment = circleSpeed;
circleButton.addEventListener('click', function (e) {
	if (id === -1) {
		id = window.requestAnimationFrame(draw);
	}
});

var draw = function (e) {
	ctx.clearRect(0, 0, canvas.width, canvas.width);
	ctx.beginPath();
	if (currentCircleSize > 0) {
		ctx.arc(canvas.height / 2, canvas.width / 2, currentCircleSize, 0, 2 * Math.PI, false);
	}
	if (currentCircleSize >= canvas.width/2) {
		increment = -circleSpeed;
	}
	if (currentCircleSize <= 0) {
		increment = circleSpeed;
	}
	ctx.stroke();
	ctx.fill();
	currentCircleSize += increment;
	id = window.requestAnimationFrame(draw);
}