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
		q: "Which English city is known as the Steel City?",
		op1: "Sheffield",
		op2: "Manchester",
		op3: "London",
		op4: "Nottingham",
		answer: "Sheffield",
	},
	{
		q: "The logo for luxury car maker Porsche features which animal?",
		op1: "Jaguar",
		op2: "Leopard",
		op3: "Horse",
		op4: "Falcon",
		answer: "Horse",
	},
	{
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
const op1Text = document.querySelector(".option__text1");
const op2Text = document.querySelector(".option__text2");
const op3Text = document.querySelector(".option__text3");
const op4Text = document.querySelector(".option__text4");

// GENERATES QUESTIONS AND OPTIONS
function generateQuestions(id) {
	let generatedQuestion =
		QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];

	questionText.textContent = generatedQuestion.q;

	op1Text.textContent = generatedQuestion.op1;
	op2Text.textContent = generatedQuestion.op2;
	op3Text.textContent = generatedQuestion.op3;
	op4Text.textContent = generatedQuestion.op4;

	getUserSelection();
}

function getUserSelection() {
	op1Text.addEventListener("click", (e) => {
		op1Text.classList.add("selected");

		op2Text.classList.add("not_selected");
		op3Text.classList.add("not_selected");
		op4Text.classList.add("not_selected");
	});

	op2Text.addEventListener("click", (e) => {
		op2Text.classList.add("selected");

		op1Text.classList.add("not_selected");
		op3Text.classList.add("not_selected");
		op4Text.classList.add("not_selected");
	});

	op3Text.addEventListener("click", (e) => {
		op3Text.classList.add("selected");

		op2Text.classList.add("not_selected");
		op1Text.classList.add("not_selected");
		op4Text.classList.add("not_selected");
	});

	op4Text.addEventListener("click", (e) => {
		op4Text.classList.add("selected");

		op2Text.classList.add("not_selected");
		op3Text.classList.add("not_selected");
		op1Text.classList.add("not_selected");
	});
}

generateQuestions();
