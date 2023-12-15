
//makes a circle class with all its own custom properties
class Circle {
	constructor(x, y) {
	    this.x = x;
	    this.y = y;
	    this.size = 50;
	    this.alpha = 0;
  	}


  	//display function, this provides the properties for the ellipse and uses values from the constructor
  	display() {
	    fill(85, 91, 181, this.alpha);
	    noStroke();
	    ellipse(this.x, this.y, this.size);
  	}

  	//this allows the circles to fade in, when the opacity is less than 255, it gradually increases it
  	update() {
    	if (this.alpha < 255){
    		this.alpha += 5;
    	}
  	}
}

//make an array for the circles
let circles = [];

function setup() {
	createCanvas(600,600);
	background(30, 33, 82);
}

function draw(){
	//this makes the if statement run at approx 1 second intervals, since its around 60fps
	if (frameCount % 60 == 0){
		//add a new item to the circles array, using the circle class properties
		circles.push(new Circle(random(25, 575), random(25, 575)));
		console.log(circles.length);
	}

	//for each item in the circles list, run the display and update functions that were made earlier
	for(x=0; x<circles.length; x++){
		circles[x].display();
		circles[x].update();
	}
}

