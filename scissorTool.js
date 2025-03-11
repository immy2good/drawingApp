// NOTE: I could not get this to work hence this will not be used and a new instance will not be created in the setup function.
function scissorsTool() {
    this.icon = "assets/scissors.png";
    this.name = "Scissors";

    this.selectMode = 0;  // 0 = Select, 1 = Cut, 2 = Paste
    this.selectedArea = { x: 0, y: 0, w: 0, h: 0 };
    this.selectedPixels = null;

    this.mousePressed = () => {
        if (this.selectMode === 1) {
            this.selectedArea.x = mouseX;
            this.selectedArea.y = mouseY;   
        }
    }
    this.mouseDragged = () => {
        if (this.selectMode === 1) {
            // Update selection area dimensions
            this.selectedArea.w = mouseX - this.selectedArea.x;
            this.selectedArea.h = mouseY - this.selectedArea.y;
        }
    };

    this.mouseReleased = () => {
        if (this.selectMode === 1) {
            if (this.selectedArea.w !== 0 && this.selectedArea.h !== 0) {
                this.cutSelection();
            }
        }
    };

    this.cutSelection = () => {
        if (this.selectedArea.w > 0 && this.selectedArea.h > 0) {
            loadPixels(); // Save current state

            // Store selected pixels
            this.selectedPixels = get(this.selectedArea.x, this.selectedArea.y, this.selectedArea.w, this.selectedArea.h);

            updatePixels(); // Refresh pixels

            // Cut the selected area by filling it with white
            fill(255);
            noStroke();
            rect(this.selectedArea.x, this.selectedArea.y, this.selectedArea.w, this.selectedArea.h);
        }
    };

    // this.keyPressed = () => {
    //     if (keyCode === 86 && keyIsDown(CONTROL) && this.selectedPixels) { // Ctrl + V
    //         image(this.selectedPixels, mouseX, mouseY);
    //         this.selectMode = 0;
    //         this.selectButton.html("Select Area");
    //     }
    // };

    this.draw = () => {
        if (this.selectMode === 1 && this.selectedArea.w !== 0 && this.selectedArea.h !== 0) {
            noFill();
            stroke(255, 0, 0);
            strokeWeight(1);
            rect(this.selectedArea.x, this.selectedArea.y, this.selectedArea.w, this.selectedArea.h);
        }
    };
// }

// this function will populate the options for the line tool.
this.populateOptions = function() {
        
    select(".toolSettings").html(
        // this.selectButton = createButton('Select Area');
        "<button id='selectButton'>Select Area</button>");
    // 	//click handler
    select("#selectButton").mousePressed(() => {
        if (this.selectMode === 0) {
            this.selectMode = 1;
            this.selectButton.html("Cut");
            loadPixels(); // Store current frame
        } 
        else if (this.selectMode === 1) {
            this.selectMode = 2;
            this.selectButton.html("Paste");

            updatePixels(); // Refresh the screen

            // Store the pixels of the selected area
            this.selectedPixels = get(this.selectedArea.x, this.selectedArea.y, this.selectedArea.w, this.selectedArea.h);

            // Cut the area by filling it with white
            fill(255);
            noStroke();
            rect(this.selectedArea.x, this.selectedArea.y, this.selectedArea.w, this.selectedArea.h);
        } 
        else if (this.selectMode === 2) {
            this.selectMode = 0;
            this.selectButton.html("Select Area");
        }
    });
};

};