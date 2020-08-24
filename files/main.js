'use strict';

const C = document.getElementById("canvas");

let scalingCanvas = false;

function scaleCanvas() {
	// Resizes the canvas element to fit the screen.
	let scale = Math.floor(Math.min(innerWidth / C.width, innerHeight / C.height) * devicePixelRatio) / devicePixelRatio;

	C.style.width = C.width * scale + "px";
	C.style.height = C.height * scale + "px";

	scalingCanvas = false;
}

function scheduleScaleCanvas() {
	// Schedules canvas scaling so it can be done less frequently.
	if (!scalingCanvas)
		requestAnimationFrame(scaleCanvas);
	scalingCanvas = true;
}

function resizeCanvas(width, height) {
	// Changes the size of the canvas.
	C.width = width;
	C.height = height;
	scheduleScaleCanvas();
}

addEventListener("resize", scheduleScaleCanvas);

resizeCanvas(192, 192);
