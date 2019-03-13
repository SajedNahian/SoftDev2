var svgContainer = document.getElementById('svgContainer');
var prevPoint = null;
var domRect = svgContainer.getBoundingClientRect();
var clearButton = document.getElementById('clear');

svgContainer.addEventListener('click', (e) => {
	var x = event.clientX - domRect.left;
	var y = event.clientY - domRect.top;
	if (prevPoint) {
		svgContainer.appendChild(getLineCode(prevPoint.x, prevPoint.y, x, y));
	}
	svgContainer.appendChild(getCircleCode(x, y));
	prevPoint = {x, y}
	console.log(x,y);
});

var getCircleCode = (x, y) => {
	var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	circle.setAttribute('cx', x);	
	circle.setAttribute('cy', y);
	circle.setAttribute('r', '20');
	circle.setAttribute('fill', 'red');
	circle.setAttribute('stroke', 'black');
	return circle;
}

var getLineCode = (x1, y1, x2, y2) => {
	var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	line.setAttribute('x1', x1);	
	line.setAttribute('y1', y1);
	line.setAttribute('x2', x2);	
	line.setAttribute('y2', y2);
	line.setAttribute('style', 'stroke:rgb(0,0,0);stroke-width:4');
	return line;
}

clearButton.addEventListener('click', () => {
	svgContainer.innerHTML = '';
	prevPoint = null;
});
