// QUESTIONS
const QUESTIONS = [
	{
		id: 0,
		q: "What was Meta Platforms Inc formerly known as?",
		a: [
			{ op1: "IBM" },
			{ op2: "Google" },
			{ op3: "Infosys" },
			{ op4: "Facebook" },
			{ isCorrect: "Facebook" },
		],
	},
	{
		id: 1,
		q: "Which English city is known as the Steel City?",
		a: [
			{ op1: "Sheffield" },
			{ op2: "Manchester" },
			{ op3: "London" },
			{ op4: "Nottingham" },
			{ isCorrect: "Sheffield" },
		],
	},
	{
		id: 2,
		q: "The logo for luxury car maker Porsche features which animal?",
		a: [
			{ op1: "Jaguar" },
			{ op2: "Leopard" },
			{ op3: "Horse" },
			{ op4: "Falcon" },
			{ isCorrect: "Horse" },
		],
	},
	{
		id: 3,
		q: "What is a young giraffe called?",
		a: [
			{ op1: "Calf" },
			{ op2: "Mare" },
			{ op3: "Joey" },
			{ op4: "ram" },
			{ isCorrect: "Calf" },
		],
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

let score = 0;
totalText.textContent = `Total Points : ${QUESTIONS.length}`;
// ITERATES THROUGH QUESTIONS
function iterate(id) {
	// populate question text
	questionText.textContent = QUESTIONS[id].q;

	// populate option text
	option1Text.textContent = QUESTIONS[id].a[0].op1;
	option2Text.textContent = QUESTIONS[id].a[1].op2;
	option3Text.textContent = QUESTIONS[id].a[2].op3;
	option4Text.textContent = QUESTIONS[id].a[3].op4;

	getUserSelect();

	// get user selection
	function getUserSelect() {
		let selected;

		option1Text.addEventListener("click", () => {
			option1Text.classList.add("selected");
			selected = option1Text.textContent;
			check(selected);
		});

		option2Text.addEventListener("click", () => {
			option2Text.classList.add("selected");
			selected = option2Text.textContent;
			check(selected);
		});

		option3Text.addEventListener("click", () => {
			option3Text.classList.add("selected");
			selected = option3Text.textContent;
			check(selected);
		});

		option4Text.addEventListener("click", () => {
			option4Text.classList.add("selected");
			selected = option4Text.textContent;
			check(selected);
		});
	}

	// console.log(score);

	// evaluate options
	function check(selected) {
		if (selected == QUESTIONS[id].a[4].isCorrect && score < QUESTIONS.length) {
			score++;
			console.log(score);
			scoreText.textContent = `Score: ${score}`;
			removeSelection();
		} else {
			scoreText.textContent = `Score: ${score}`;
			removeSelection();
		}
	}

	// remove selections
	function removeSelection() {
		setInterval(() => {
			option1Text.classList.remove("selected");
			option2Text.classList.remove("selected");
			option3Text.classList.remove("selected");
			option4Text.classList.remove("selected");
		}, 1000);

		loadNext();
	}

	// LOAD NEXT QUESTION
	function loadNext() {
		setTimeout(() => {
			if (id < QUESTIONS.length) {
				QUESTIONS[id] = id++;
				iterate(id);
			}
		}, 500);
	}
}

iterate(0);
