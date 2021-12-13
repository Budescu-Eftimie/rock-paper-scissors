function computerPlay() {
  let choise = ["Rock", "Paper", "Scissors"];
  return choise[Math.floor(Math.random() * 3)];
}

let buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", function (e) {
    let player = e.target.innerText;
    playRound(player);
  })
);

function playRound(player) {
  let computer = computerPlay();
  let playerScore = document.getElementsByClassName("player")[0];
  let computerScore = document.getElementsByClassName("computer")[0];
  let resultMesage = document.getElementsByClassName("resultMesage")[0];
  if (player == computer) {
    resultMesage.innerText = "It's a Tie.";
    resultMesage.style.color = "#FCE872";
  } else if (player == "Rock" && computer == "Paper") {
    resultMesage.innerText = "You lose, Paper beats Rock";
    resultMesage.style.color = "#e22957";
    computerScore.innerText++;
  } else if (player == "Rock" && computer == "Scissors") {
    resultMesage.innerText = "You win, Rock beats Scissors";
    resultMesage.style.color = "#81d648";
    playerScore.innerText++;
  } else if (player == "Paper" && computer == "Rock") {
    resultMesage.innerText = "You win, Paper beats Rock";
    resultMesage.style.color = "#81d648";
    playerScore.innerText++;
  } else if (player == "Paper" && computer == "Scissors") {
    resultMesage.innerText = "You lose, Scissors beats Paper";
    resultMesage.style.color = "#e22957";
    computerScore.innerText++;
  } else if (player == "Scissors" && computer == "Paper") {
    resultMesage.innerText = "You win, Scissors beats Paper";
    resultMesage.style.color = "#81d648";
    playerScore.innerText++;
  } else {
    resultMesage.innerText = "You lose,Rock beats Scissors";
    resultMesage.style.color = "#e22957";
    computerScore.innerText++;
  }
}
