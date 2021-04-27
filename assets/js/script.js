var highScore = document.getElementById("highScore");
var timer = document.getElementById("timer");
var startPage = document.getElementById("startPage");
var startButton = document.getElementById("startButton");
var quiz = document.getElementById("quiz");
var questions = document.getElementById("questions");
var answer1 = document.getElementById("a");
var answer2 = document.getElementById("b");
var answer3 = document.getElementById("c");
var answer4 = document.getElementById("d");
var secondsLeft = 75;
var quizQuestions = [
  {
    question: "how many pets do you have?",
    answer1: "l",
    answer2: "2",
    answer3: "3",
    answer4: "4",
    correctAnswer: "3",
  },
  {
    question: "how many cats do you have?",
    answer1: "l",
    answer2: "2",
    answer3: "3",
    answer4: "4",
    correctAnswer: "3",
  },
  {
    question: "how many pets do you have?",
    answer1: "l",
    answer2: "2",
    answer3: "3",
    answer4: "4",
    correctAnswer: "3",
  },
  {
    question: "how many pets do you have?",
    answer1: "l",
    answer2: "2",
    answer3: "3",
    answer4: "4",
    correctAnswer: "3",
  },
  {
    question: "how many pets do you have?",
    answer1: "l",
    answer2: "2",
    answer3: "3",
    answer4: "4",
    correctAnswer: "3",
  },
];

// on click, needs to access the answer inside of the object and be able to tell if correct/incorrect
// if incorrect also need to reduce time
// if answer1 is not correct, reduce time by 10 seconds AND move onto next question
// access index of array, declare variable which is array index + 1 for next question
answer1.addEventListener("click", function () {
  console.log(quizQuestions[currentQuestion]);
  // increases currentQuestion by 1
  currentQuestion++;
  console.log(quizQuestions[currentQuestion]);
});
// create a number to access the current index that I'm on (need to add +1 on index)
var currentQuestion = 0;

function startCountdown() {
  timeLeft = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time Left: " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timeLeft);
    }
  }, 1000);
}

startButton.addEventListener("click", function () {
  startCountdown();
});
