// QUESTIONS
const QUESTIONS = [
	{
		id: 1,
		q: "What was Meta Platforms Inc formerly known as?",
		op1: "IBM",
		op2: "Facebook",
		op3: "Google",
		op4: "Infosys",
		answer: "Facebook",
	},
	{
		id: 2,
		q: "Which English city is known as the Steel City?",
		op1: "Sheffield",
		op2: "Manchester",
		op3: "London",
		op4: "Nottingham",
		answer: "Sheffield",
	},
	{
		id: 3,
		q: "The logo for luxury car maker Porsche features which animal?",
		op1: "Jaguar",
		op2: "Leopard",
		op3: "Horse",
		op4: "Falcon",
		answer: "Horse",
	},
	{
		id: 4,
		q: "What is a young giraffe called?",
		op1: "Calf",
		op2: "Mare",
		op3: "Joey",
		op4: "ram",
		answer: "Calf",
	},
];

// VARIABLES
const questionText = document.querySelector(".quiz__question");
const option1Text = document.querySelector("#option1");
const option2Text = document.querySelector("#option2");
const option3Text = document.querySelector("#option3");
const option4Text = document.querySelector("#option4");
const scoreText = document.querySelector("#score");
const totalText = document.querySelector("#total");
const nextBtn = document.querySelector("#next-btn");

let score = 0;

// START QUIZ
function start() {
	generateQuestion();
}

// GENERATE QUESTION AND POPULATE OPTIONS
function generateQuestion(id) {
	console.log(QUESTIONS);
	questionText.textContent = question.q;

	option1Text.textContent = question.op1;
	option2Text.textContent = question.op2;
	option3Text.textContent = question.op3;
	option4Text.textContent = question.op4;

	getUserSelection(question);
}

// GET USER SELECTION
function getUserSelection(question) {
	option1Text.addEventListener("click", (e) => {
		if (option1Text.textContent == question.answer) {
			option1Text.classList.add("correct");
			score++;
			scoreText.textContent = `Score: ${score}`;
		} else {
			option1Text.classList.add("incorrect");
			return;
		}
	});

	option2Text.addEventListener("click", (e) => {
		if (option2Text.textContent == question.answer) {
			option2Text.classList.add("correct");
			score++;
			scoreText.textContent = `Score: ${score}`;
		} else {
			option2Text.classList.add("incorrect");
			return;
		}
	});

	option3Text.addEventListener("click", (e) => {
		if (option3Text.textContent == question.answer) {
			option3Text.classList.add("correct");
			score++;
			scoreText.textContent = `Score: ${score}`;
		} else {
			option3Text.classList.add("incorrect");
			return;
		}
	});

	option4Text.addEventListener("click", (e) => {
		if (option4Text.textContent == question.answer) {
			option4Text.classList.add("correct");
			score++;
			scoreText.textContent = `Score: ${score}`;
		} else {
			option4Text.classList.add("incorrect");
			return;
		}
	});
}

// GENERATE NEXT QUESTION
nextBtn.addEventListener("click", generateQuestion);

start();
