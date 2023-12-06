
//functions are triggered onclick

function makeCat1Sit() { 

	//was having bugs so i used consolelog to test what was/wasnt running 
	console.log("fn"); 

	//checks if cat is on standing image, then switches to sitting
	if (document.getElementById('cat1').src.endsWith("imgs/cat1Stand.png")) {
		document.getElementById('cat1').src = "imgs/cat1Sit.jpg";
		console.log("if");
	}

	//if cat isnt on the standing image, it does this instead

	else {
		document.getElementById('cat1').src = "imgs/cat1Stand.png"; 
		console.log("else");
	}
	
}

//same as first function but for the second image

function makeCat2Sit() {

	console.log("fn");

	if (document.getElementById('cat2').src.endsWith("imgs/cat2Stand.jpg")) {
		document.getElementById('cat2').src = "imgs/cat2Sit.png";
		console.log("if");
	}

	else {
		document.getElementById('cat2').src = "imgs/cat2Stand.jpg";
		console.log("else");
	}
	
}


