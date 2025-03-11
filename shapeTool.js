
function shapeTool() {
    this.icon = "assets/shapes.png";
    this.name = "Box";
    this.shape = "rectangle";
    // use this to store the starting position of the mouse locally to the tool
    this.startMouseX = -1;
    this.startMouseY = -1;
    this.drawing = false;

    this.draw = function() {
        // display the last save state of pixels.
        if (mouseIsPressed) {
            if (this.startMouseX == -1) {
                this.startMouseX = mouseX;
                this.startMouseY = mouseY;
                this.drawing = true;
                loadPixels();
            } else {
                updatePixels();
                noFill()
                strokeWeight(Number(select("#strokeWidth").value()));
                // draw the shape based on the current shape setting
                if (this.shape === "rectangle") {
                    rect(this.startMouseX, this.startMouseY, mouseX - this.startMouseX, mouseY - this.startMouseY);
                } else if (this.shape === "triangle") {
                    triangle(this.startMouseX, mouseY, (this.startMouseX + mouseX) / 2, this.startMouseY, mouseX, mouseY);
                } else {        
                    ellipse((this.startMouseX + mouseX) / 2, (this.startMouseY + mouseY) / 2, Math.abs(mouseX - this.startMouseX), Math.abs(mouseY - this.startMouseY));
                }

            }
        } else if (this.drawing) {
            this.drawing = false;
            this.startMouseX = -1;
            this.startMouseY = -1;
        }
    };
//    //populate the options for the shape tool 
    this.populateOptions = function() {
        select(".shapes").html(
            '<button id="btnShapes" class="button">Rectangle</button>');
        select("#btnShapes").mousePressed(() => {
            if (this.shape === "rectangle") { // if the shape is a rectangle change to triangle
                this.shape = "triangle";
                select("#btnShapes").html("Triangle");
            } else if (this.shape === "triangle") { // if the shape is a triangle change to ellipse
                this.shape = "ellipse";
                select("#btnShapes").html("Ellipse"); // change the button text to ellipse
            } else { // if the shape is an ellipse change to rectangle
                this.shape = "rectangle";
                select("#btnShapes").html("Rectangle"); 
            }
        });
    }

  	//when the tool is deselected update the pixels to just show the drawing and
	//hide the line of symmetry. Also clear options
	this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".shapes").html("");
	};

}

