
//x and y position 

var x = 300;
var y = 300;

//speed increments

var xSpeed = 5;
var ySpeed = 5;
var speedIncrease = -1.2;
var maxSpeed = 12;

//randomized colors

var randomR = 15;
var randomG = 15;
var randomB = 15;

// var loop = true;

function setup() {

	createCanvas(800,600);

}

function draw() {

	background(196, 164, 132);
	noStroke();
	fill(randomR,randomG,randomB);

	ellipse(x,y,100,100);

//sets speed

	x = x + xSpeed;
	y = y + ySpeed;

//if the shape hits the edges, it inverts the direction 
//+-50 so that it bounces at the edge of the shape and not the center

	if (x + 50 >= width || x - 50 <= 0) {
		
		//this inverts the direction and speeds it up
		xSpeed = xSpeed * speedIncrease;

		//this randomizes the color on each bounce
		randomR = random(5,80);
		randomG = random(5,80);
		randomB = random(5,80);

		//this caps the speed at 15
		if (xSpeed >= maxSpeed) {
			speedIncrease = -1;
		}
		
	} 

//same thing but for y position

	if (y + 50 >= height || y - 50 <= 0) {
		
		ySpeed = ySpeed * speedIncrease;

		randomR = random(5,80);
		randomG = random(5,80);
		randomB = random(5,80);
		
		if (xSpeed >= maxSpeed) {
			speedIncrease = -1;
		}

	}



}