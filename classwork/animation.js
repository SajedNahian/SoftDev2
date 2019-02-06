var animateButton = document.getElementById("animate");
var stopButton = document.getElementById("stop");
var canvas = document.getElementById("slate");
var collisionButton = document.getElementById("collision");
var ctx = canvas.getContext("2d");
var currentCircleSize = 1;
var speed = 10;
var increment = speed;
var id = -1;
var logo = new Image();
logo.src = "logo_dvd.jpg";

collisionButton.addEventListener('click', function (e) {
	if (id === -1) {
		id = window.requestAnimationFrame(drawCollision);
	}
});


var xVel = 5;
var yVel = 4;
var curX = canvas.width / 2;
var curY = canvas.height / 2
var drawCollision = function () {
	console.log(logo.width);
	ctx.clearRect(0, 0, canvas.width, canvas.width);
	ctx.beginPath();
	//ctx.fillRect(curX, curY, 20, 20);
	ctx.drawImage(logo, curX, curY, 40, 40);
	curX += xVel;
	curY += yVel;
	if (curX >= canvas.width - 40 || curX <= 0) {
		xVel = -xVel;	
	}
	if (curY <= 0 || curY >= canvas.height - 40) {
		yVel = -yVel;
	}
	id = window.requestAnimationFrame(drawCollision);
}






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



