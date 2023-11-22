const questions = [
	{
		questionText: "What is the capital of France?",
		answers: [
			{ text: "Madrid", correct: false},
			{ text: "Berlin", correct: false},
			{ text: "Paris", correct: true},
			{ text: "Rome", correct: false},

		]
	},
	{
		questionText: "Which planet is known as the Red Planet?",
		answers: [
			{ text: "Venus", correct: false},
			{ text: "Mars", correct: true},
			{ text: "Jupiter", correct: false},
			{ text: "Saturn", correct: false},
,
		]
	},
	{
		questionText: "Who wrote the play 'Romeo and Juliet'?",
		answers: [
			{ text: "Charles Dickens", correct: false},
			{ text: "Jane Austen", correct: false},
			{ text: "Mark Twain", correct: false},
			{ text: "William Shakespeare", correct: true},
,
		]
	},
	{
		questionText: "What is the largest mammal in the world?",
		answers: [
			{ text: "African Elephant", correct: false},
			{ text: "Blue Whale", correct: true},
			{ text: "Giraffe", correct: false},
			{ text: "Polar Bear", correct: false},
,
		]
	},
	{
		questionText: "Which element is represented by the symbol 'O' in the periodic table?",
		answers: [
			{ text: "Gold", correct: false},
			{ text: "Oxygen", correct: true},
			{ text: "Osmium", correct: false},
			{ text: "Iron", correct: false},
,
		]
	},
	{
		questionText: "In what year did the Titanic sink?",
		answers: [
			{ text: "1904", correct: false},
			{ text: "1918", correct: false},
			{ text: "1905", correct: false},
			{ text: "1912", correct: true},
,
		]
	},
	{
		questionText: "Who painted the Mona Lisa?",
		answers: [
			{ text: "Vincent Van Gogh", correct: false},
			{ text: "Pablo Picasso", correct: false},
			{ text: "Leonardo DaVinci", correct: true},
			{ text: "Claude Monet", correct: false},
,
		]
	},
	{
		questionText: "What is the smallest prime number?",
		answers: [
			{ text: "1", correct: false},
			{ text: "2", correct: true},
			{ text: "3", correct: false},
			{ text: "5", correct: false},
,
		]
	},
	{
		questionText: "Which gas do plants absorb from the atmosphere for photosynthesis?",
		answers: [
			{ text: "Oxygen", correct: false},
			{ text: "Nitrogen", correct: false},
			{ text: "Carbon Dioxide", correct: true},
			{ text: "Hydrogen", correct: false},
,
		]
	},
	{
		questionText: "In which country were the ancient pyramids primarily built?",
		answers: [
			{ text: "Mexico", correct: false},
			{ text: "India", correct: false},
			{ text: "China", correct: false},
			{ text: "Egypt", correct: true},
,
		]
	}
]

var highScore = 0;
var selectedButtonCorrect;

function startGame() {
	questionsCorrect = 0
	currentQuestionIndex = 0
	timeLeft = 60
	document.getElementById("currentScoreValue").innerHTML = questionsCorrect;

	askQuestion(currentQuestionIndex);
}

function askQuestion(questionIndex){
	question = questions[questionIndex];
	renderQuestionText(question.questionText, document.getElementById("displayQuestionText"));
	renderAnswerButtons(question.answers);
}

function renderQuestionText(questionText, questionElement){
	questionElement.innerHTML = questionText;
}

function renderAnswerButtons(answers){
	var answerButtonGroup = document.getElementById("buttonAnswersGroup");
	answerButtonGroup.replaceChildren();

	answers.forEach(answer => {
		const button = document.createElement("button")
		button.innerHTML = answer.text;
		button.classList.add("buttonAnswer");
		button.addEventListener("click", onAnswerClick);
		button.dataset.correct = answer.correct;
		answerButtonGroup.appendChild(button);
	});
}

function onAnswerClick(e){
	checkCorrect(e.target);
	setTimeout(() => {
		gameOverOrNextQuestion();
	}, 1500);
}

function checkCorrect(selectedAnswer){
	const isCorrect = (selectedAnswer.dataset.correct === "true");

	if(isCorrect){
		selectedAnswer.style.background = "#90ee90";
		questionsCorrect += 1;
		document.getElementById("currentScoreValue").innerHTML = questionsCorrect;
	} else {
		selectedAnswer.style.background = "#ee9090";
	}
}

function gameOverOrNextQuestion() {
	currentQuestionIndex += 1
	if (currentQuestionIndex < questions.length){
		askQuestion(currentQuestionIndex);
	}
	else{
		updateHighScore(questionsCorrect);
		alert("GAME OVER");
	}
}

function updateHighScore(questionsCorrect) {
	if(questionsCorrect > highScore){
		highScore = questionsCorrect
	}

	document.getElementById("highScoreValue").innerHTML = highScore;
}


startGame();


var timer;
// var timeLeft = 5;




function updateTimer(){
	timeLeft = timeLeft -1;

	if(timeLeft >= 0)
		document.getElementById("countdown").innerHTML = timeLeft;

	else {

		clearInterval(timer);
		currentQuestionIndex = questions.length;
		alert("TIMES UP");
		// console.log

	}

}

function start() {

	timer = setInterval(updateTimer,1000);
	startGame();
	updateTimer();

	
}