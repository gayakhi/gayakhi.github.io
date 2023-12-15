

function setup() {
  createCanvas(600, 600);
}


//makes trail array variable
let trail = [];
// let opacity = 255;

//sets the max trail length variable
const maxTrailLength = 400;


function draw() {
background(30, 33, 82);

//remove cursor
noCursor();
 
if (mouseIsPressed){

//add mouse position to trail array, both x and y pos together are listed as one item  
trail.push([mouseX, mouseY]);

}
	//for loop that goes though each point in the trail array
	for(let i = 0; i < trail.length; i++) {

		//sets the opacity variable, and uses map to convert into a value that will adjust the value based on the position of the item in the trail array
  		const opacity = map(i, 0, trail.length - 1, 0, 255);
  		
  		noStroke();
  		fill(85, 91, 181, opacity);

  		//makes the ellipse at the first coords in the trail array
  		ellipse(trail[i][0], trail[i][1], 8);
	}


	//once the trail array reaches the max length, start removing values from the beginning of the array
	while (trail.length > maxTrailLength) {
   		trail.shift();
   	}
    // if(trail.length > 0 && opacity > 1) {
    //   opacity -= 1;
    // }

}
