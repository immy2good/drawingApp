function stampTool() {
  this.name = 'stampTool';
  this.icon = 'assets/stamp.png';
  var stampImage = loadImage('assets/stamp.png');
  this.sizeX = 30;
  this.sizeY = 30;

  this.draw = function () {
    if (mouseIsPressed) {       
      image(stampImage, mouseX, mouseY, this.sizeX, this.sizeY);
    }
  };


  this.populateOptions = function() {

//    //populate the options for the shape tool
    // adds two divs to the stamps div. One for size options and one for stamp options
    select(".stamps").html(
      // '<div id="options">' +
      '<div>' +
        '<button class="button" id="small">Small</button>' +
        '<button class="button" id="medium">Medium</button>' +
        '<button class="button" id="large">Large</button>' +
        '<button class="button" id="x-large">X-Large</button>' +
      '</div>' +
      '<div id="stampTypes" class="stampTypes">' +
        '<img id="stamp1" src="assets/stamp1.png" class="stampIcons" alt="Stamp1"> ' +
        '<img id="stamp2" src="assets/stamp2.png" class="stampIcons" alt="Stamp2">' +
        '<img id="stamp3" src="assets/stamp3.png" class="stampIcons" alt="Stamp3">' +
        '<img  id="stamp4"src="assets/stamp4.png" class="stampIcons" alt="Stamp4">' +
      '</div>'
    );
    // click handlers for the size buttons
    select("#small").mousePressed(() => {
      this.sizeX = 30;
      this.sizeY = 30;
    });

    select("#medium").mousePressed(() => {
      this.sizeX = 50;
      this.sizeY = 50;
    });

    select("#large").mousePressed(() => {
      this.sizeX = 100;
      this.sizeY = 100;
    });

    select("#x-large").mousePressed(() => {
      this.sizeX = 150;
      this.sizeY = 150;
    });

    select("#stamp1").mousePressed(() => {
      stampImage = loadImage('assets/stamp1.png');
    });

    select("#stamp2").mousePressed(() => {
      stampImage = loadImage('assets/stamp2.png');
    });
    
    select("#stamp3").mousePressed(() => {
      stampImage = loadImage('assets/stamp3.png');
    });

    select("#stamp4").mousePressed(() => {
      stampImage = loadImage('assets/stamp4.png');
    });


    
};

	//when the tool is deselected update the pixels to just show the drawing and
	//hide the line of symmetry. Also clear options
	this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".stamps").html("");
	};

  


}