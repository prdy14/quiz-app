const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correct: 0,
  },
  {
    question: "Which is the largest planet in our solar system?",
    answers: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: 2,
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Jane Austen"],
    correct: 0,
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

function showQuestion() {
  let q = questions[currentQuestionIndex];
  questionElement.textContent = q.question;
  answersElement.innerHTML = "";
  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("btn");
    button.onclick = () => selectAnswer(index);
    answersElement.appendChild(button);
  });
}

function selectAnswer(index) {
  if (index === questions[currentQuestionIndex].correct) {
    score++;
  }
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    nextButton.style.display = "none";
  } else {
    questionElement.textContent = `Quiz Over! Your score: ${score}/${questions.length}`;
    answersElement.innerHTML = "";
    nextButton.style.display = "none";
  }
});

showQuestion();
