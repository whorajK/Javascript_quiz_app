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
		question: "Donquixote Doflamingo's devil fruit name is ?",
		a: "Gura Gura nomi",
		b: "Gomu Gomu nomi",
		c: "Ito Ito nomi",
		d: "Mera Mera nomi",
		answer: "c",
	},
	{
		question: "Who is the author of the manga 'Attack on titan' ?",
		a: "Eiichiro Oda",
		b: "Masashi Kishimoto",
		c: "Rumiko Takahashi",
		d: "Hajime Isayama",
		answer: "d",
	},
	{
		question: "Which one of the following anime is known as the big three ?",
		a: "Bleach",
		b: "Reincarnated as a slime",
		c: "Mushouko Tensei",
		d: "Blue Lock",
		answer: "a",
	},
	{
		question: "Who is the captain of beast pirates in the anime One piece ?",
		a: "Big Mom",
		b: "Shanks",
		c: "Monkey D Garp",
		d: "Kaido",
		answer: "d",
	},
	{
		question: "Which was the first anime to be nominated for oscar ?",
		a: "Your Name",
		b: "Spirited Away",
		c: "A silent voice",
		d: "Neon Genesis",
		answer: "b",
	},
	{
		question: "World's longest running anime is ?",
		a: "Sazae-san",
		b: "One piece",
		c: "Pokemon",
		d: "Dragon ball",
		answer: "a",
	},
	{
		question: "Haruichi Furudate created what series ?",
		a: "Berserk",
		b: "Blue lock",
		c: "Kuroko no basuke",
		d: "Haikyuu",
		answer: "d",
	},
	{
		question: "Which is the most watched anime in Asia as of 2022 ?",
		a: "Attack on titan",
		b: "One piece",
		c: "Pokemon",
		d: "Dragon ball",
		answer: "a",
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
           
			<h2 class= "title">You finished the quiz</h2>
			<h3 class = "subtitle">You answered ${score}/${quizData.length}</h3>
            <button onclick= "location.reload()">Restart</button>`;

			document.querySelector(".quiz_wrapper").classList.add("over");
		}
	}
});
