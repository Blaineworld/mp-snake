'use strict';

let notAboutToResizeTheCanvas = true;

function resizeTheCanvas() {
	if (notAboutToResizeTheCanvas) {
		notAboutToResizeTheCanvas = false;
		requestAnimationFrame(actuallyResizeTheCanvas);
	}
}

function actuallyResizeTheCanvas() {
	notAboutToResizeTheCanvas = true;

	const scale = Math.floor(Math.min(
		CONTAINER.offsetWidth / CANVAS.width,
		CONTAINER.offsetHeight / CANVAS.height
	) * devicePixelRatio) / devicePixelRatio;

	CANVAS.style["height"] = CANVAS.height * scale + "px";
	CANVAS.style["width"] = CANVAS.width * scale + "px";

	CANVAS.style["outline-width"] = Math.max(scale, 3 / devicePixelRatio) + "px";
};

actuallyResizeTheCanvas();
addEventListener("resize", resizeTheCanvas);
