function HelperFunctions() {

	//p5.dom click events. Notice that there is no this. at the
	//start we don't need to do that here because the event will
	//be added to the button and doesn't 'belong' to the object

	//event handler for the clear button event. Clears the screen
	select("#clearButton").mouseClicked(function() {
		//???
		clear();
		

		//call loadPixels to update the drawing state
		//this is needed for the mirror tool
		loadPixels();
	});

	//event handler for the save image button. saves the canvsa to the
	//local file system.
	select("#saveImageButton").mouseClicked(function() {
		//???
		save("myDrawing.jpg");
	});
// this works in conjunction with the undoRedoManager.js file
// to add click events to the undo and redo buttons
	select("#undoButton").mouseClicked(function() {
        undoRedoManager.undo();
        console.log("undo mouseClick event");
    });
// this works in conjunction with the undoRedoManager.js file
// to add click events to the undo and redo buttons
    select("#redoButton").mouseClicked(function() {
        undoRedoManager.redo();
        // console.log("redo mouseClick event");
    });

	


}