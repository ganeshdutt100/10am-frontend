let arr = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
function winner(user, computer) {
  if (user === computer) {
    return "tie";
  }

  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "user win";
  } else {
    return "computer win";
  }
}
while (true) {
  let userChoice = prompt("Enter your choice ");
  if (userChoice === null) {
    console.log("Game over");
    break;
  }
  let computerChoice = getComputerChoice();
  console.log("User : ", userChoice, " vs Computer ", computerChoice);
  console.log("Result  :  ", winner(userChoice, computerChoice));

  let playAgain = prompt("yes/no");
  if (playAgain === null || playAgain === "no") {
    console.log("Game over");
    break;
  }
}
