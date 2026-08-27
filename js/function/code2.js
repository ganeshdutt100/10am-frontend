let arr = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
function winner(user, computer) {
  if (user === computer) {
    return "tie";
  }

  const playerwin = "";
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    console.log("userWin");
  } else {
    console.log("computer win ");
  }
}
