function LineToTool(){
	this.icon = "assets/line-segment-duotone.png";
	this.name = "LineTo";

	// initialize the values of mouse pounts out of canvas area. 
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	// draw function to draw the line from the start point to the end point. 
	this.draw = function(){
		// if the mouse is pressed, then draw the line from the start point to the end point.
		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels(); 
				// this ia p5.js function that loads each pixel. Read more about pixels here: https://p5js.org/reference/p5/pixels/ and about loadPixels() here https://p5js.org/reference/p5/loadPixels/
			}
			// else update the pixels and draw the line from the start point to the end point.
			else{
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
