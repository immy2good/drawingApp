//global variables that will store the toolbox colour palette
//and the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;

function setup() {
  //create a canvas to fill the content div from index.html
  canvasContainer = select("#content");
  var c = createCanvas(
    canvasContainer.size().width,
    canvasContainer.size().height,
    { willReadFrequently: true }
  );
  c.parent("content");

  //create helper functions and the colour palette
  helpers = new HelperFunctions();
  colourP = new ColourPalette();
  strokes = new StrokeSettings(); // Added StrokeSettings to the setup function. This will create the stroke settings UI. Help change the "stroke" of the brush.
  undoRedoManager = new UndoRedoManager(); // Create an instance of the UndoRedoManager class

  //create a toolbox for storing the tools
  toolbox = new toolBox();

  //add the tools to the toolbox.
  toolbox.addTool(new FreehandTool());
  toolbox.addTool(new LineToTool());
  toolbox.addTool(new shapeTool()); // Added shapeTool to the toolbox
  toolbox.addTool(new SprayCanTool());
  toolbox.addTool(new stampTool()); // Added stampTool to the toolbox
  toolbox.addTool(new mirrorDrawTool());
  // toolbox.addTool(new scissorsTool()); // Can't get this to work , unfortunately commented out.
}

function draw() {
  //call the draw function from the selected tool.
  //hasOwnProperty is a javascript function that tests
  //if an object contains a particular method or property
  //if there isn't a draw method the app will alert the user
  if (toolbox.selectedTool.hasOwnProperty("draw")) {
    toolbox.selectedTool.draw();
  } else {
    alert("it doesn't look like your tool has a draw method!");
  }
}
//
function mousePressed() {
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    // console.log("Mouse pressed, calling saveState...");  Commented out to reduce console log spam
    undoRedoManager.saveState(); // Capture canvas state BEFORE the user draws
  }
}
