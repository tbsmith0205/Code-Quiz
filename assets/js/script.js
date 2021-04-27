var highScore = document.getElementById("highScore");
var timer = document.getElementById("timer");
var startPage = document.getElementById("startPage");
var startButton = document.getElementById("startButton");
var quiz = document.getElementById("quiz");
var highScore = document.getElementById("highScore");
var highScore = document.getElementById("highScore");
var highScore = document.getElementById("highScore");
var highScore = document.getElementById("highScore");
var highScore = document.getElementById("highScore");
var secondsLeft = 75;

function startCountdown() {
  timeLeft = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time Left: " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timeLeft);
    }
  }, 1000);
}
