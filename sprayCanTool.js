function SprayCanTool () {
    //spray can tool that will paint on the canvas
    this.icon = "assets/spray.png",
    this.name =  "sprayCanTool",
    this.points = 15,
    this.spread = 10,
    this.draw = function(){
        //if the mouse is pressed paint on the canvas
        //spread describes how far to spread the paint from the mouse pointer
        //points holds how many pixels of paint for each mouse press.
        if(mouseIsPressed){
            for(var i = 0; i < this.points; i++){
                point(random(mouseX-this.spread, mouseX + this.spread), 
                    random(mouseY-this.spread, mouseY+this.spread));
            }
        }
    }
};