function computerPlay() {
  let choise = ["Rock", "Paper", "Scissors"];
  return choise[Math.floor(Math.random() * 3)];
}

function playerSelection() {
  let playerSelection = prompt(
    "please chose Rock, Paper or Scissors"
  ).toLowerCase();
  let firstLetter = playerSelection.charAt(0).toUpperCase();
  playerSelection = firstLetter + playerSelection.slice(1);
  return playerSelection;
}

function playRound(player, computer) {
  player = playerSelection();
  computer = computerPlay();
  let outcome = "";
  if (player == computer) {
    outcome = "It's a Tie.";
  } else if (player == "Rock" && computer == "Paper") {
    outcome = "You lose, Paper beats Rock";
  } else if (player == "Rock" && computer == "Scissors") {
    outcome = "You win, Rock beats Scissors";
  } else if (player == "Paper" && computer == "Rock") {
    outcome = "You win, Paper beats Rock";
  } else if (player == "Paper" && computer == "Scissors") {
    outcome = "You lose, Scissors beats Paper";
  } else if (player == "Scissors" && computer == "Paper") {
    outcome = "You win, Scissors beats Paper";
  } else {
    outcome = "You lose,Rock beats Scissors";
  }
  return outcome;
}

function playGame(loops) {
  let playerScore = 0;
  let computerScore = 0;
  for (let index = 0; index < loops; index++) {
    let round = playRound();
    console.log(round);
    if (round.includes("win")) {
      playerScore += 1;
    } else if (round.includes("lose")) {
      computerScore += 1;
    } else {
      computerScore += 0;
    }
  }
  console.log([playerScore, computerScore]);
}

playGame(5);
