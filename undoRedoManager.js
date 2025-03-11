function UndoRedoManager() {
    this.undoStack = [];
    this.redoStack = [];
    previousState = null;



    this.saveState = function () {
        // console.log("Saving state...");
        loadPixels();
        let snapshot = pixels.slice(); // Save a copy of the current pixels
        this.undoStack.push(snapshot);
        console.log("Undo stack size:", this.undoStack.length); // Check stack growth

        if (this.undoStack.length > 10) {
            this.undoStack.shift(); // Limit stack size to 10
        }
        this.redoStack = []; // Clear redo stack when a new action is made
    };

    this.undo = function () {
        // console.log("Undo called, stack size:", this.undoStack.length);
        if (this.undoStack.length > 0) {
            loadPixels();
            this.redoStack.push(pixels.slice()); // Save the current state before undoing
            let previousState = this.undoStack.pop(); // Get the last state from the undo stack
            // console.log(previousState); // Check what is stored in the stack

            if (previousState) {
                pixels.set(previousState);
                updatePixels(); // Ensure canvas refreshes
            } else {
                // console.log("Error: previousState is undefined!");
            }
        }
    };

    this.redo = function () {
        if (this.redoStack.length > 0) {
            loadPixels();
            this.undoStack.push(pixels.slice()); // Save the current state before redoing
            let redoState = this.redoStack.pop(); // Get the last state from the redo stack

            // console.log("Redoing state...");
            // console.log(redoState); // Check if it's valid

            if (redoState) {
                pixels.set(redoState);
                updatePixels();
            }
        }
    };
    // Clear both stacks
    this.clear = function () {
        this.undoStack = [];
        this.redoStack = [];
        // console.log("Undo and redo stacks cleared!");
    }

};
