const questions = [
  {
    question: "Apa ibu kota Indonesia?",
    choices: ["Bandung", "Jakarta", "Surabaya", "Yogyakarta"],
    answer: "Jakarta"
  },
  {
    question: "Berapa jumlah provinsi di Indonesia per 2023?",
    choices: ["34", "35", "38", "40"],
    answer: "38"
  },
  {
    question: "Siapa penemu lampu pijar?",
    choices: ["Einstein", "Newton", "Edison", "Tesla"],
    answer: "Edison"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";

  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-outline-secondary", "d-block", "mb-2");
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(choice);
    choicesEl.appendChild(btn);
  });
}

function selectAnswer(choice) {
  const correct = questions[currentQuestion].answer;
  if (choice === correct) score++;

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-container").classList.add("d-none");
  resultEl.classList.remove("d-none");
  scoreEl.textContent = `${score} dari ${questions.length}`;
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
};

showQuestion();
