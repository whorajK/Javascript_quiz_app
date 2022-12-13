// QUIZ DATA
const quizData = [
	{
		question: "Who is the protagonist of the anime series Dragon Ball ?",
		a: "Kurosaki Ichigo",
		b: "Goku",
		c: "Uzumaki Naruto",
		d: "Monkey D Luffy",
		answer: "b",
	},
	{
		question: "What is the name of Kurosaki Ichigo's zanpaktu ?",
		a: "Benihime",
		b: "Hyorinmaru",
		c: "Zangetsu ",
		d: "Zabimaru  ",
		answer: "c",
	},

	{
		question: "Who is the captain of beast pirates in the anime One piece ?",
		a: "Big Mom",
		b: "Shanks",
		c: "Monkey D Garp",
		d: "Kaido",
		answer: "d",
	},
];

// VARIABLES
const questionText = document.querySelector("#question-text");
const optionA_text = document.querySelector("#a-text");
const optionC_text = document.querySelector("#c-text");
const optionB_text = document.querySelector("#b-text");
const optionD_text = document.querySelector("#d-text");
const optionEls = document.querySelectorAll(".option");

const nextBtn = document.querySelector("#next-btn");

let currentQuiz = 0;
let score = 0;

// GENERATE QUESTION
loadQuizData();

function loadQuizData() {
	deselect();

	let currentQuestion = quizData[currentQuiz];
	questionText.textContent = currentQuestion.question;

	optionA_text.textContent = currentQuestion.a;
	optionB_text.textContent = currentQuestion.b;
	optionC_text.textContent = currentQuestion.c;
	optionD_text.textContent = currentQuestion.d;
}

// REGISTER USER SELECTION
function getUserSelection() {
	let selection = undefined;

	optionEls.forEach((optionEl) => {
		if (optionEl.checked) {
			selection = optionEl.id;
		}
	});

	return selection;
}

// DESELECT
function deselect() {
	optionEls.forEach((optionEl) => {
		optionEl.checked = false;
	});
}

// LOAD NEXT QUESTION
nextBtn.addEventListener("click", () => {
	const answer = getUserSelection();

	if (answer) {
		if (answer === quizData[currentQuiz].answer) {
			score++;
		}
		currentQuiz++;
		if (currentQuiz < quizData.length) {
			loadQuizData();
		} else {
			document.querySelector(".quiz_wrapper").innerHTML = `
            <h2>You finished the quiz</h2>
            <button onclick= "location.reload()">Restart</button>`;
		}
	}
});
