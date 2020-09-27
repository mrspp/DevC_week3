import CHOICES from "./choices";

const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];

const getRoundOutcome = (userChoice, computerChoice) => {
  let result;

  if (userChoice === "Rock") {
    result = computerChoice === "Scissors" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "Paper") {
    result = computerChoice === "Rock" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "Scissors") {
    result = computerChoice === "Paper" ? "Victory!" : "Defeat!";
  }

  if (userChoice === computerChoice) result = "Tie game!";
  return result;
};

export default { randomComputerChoice, getRoundOutcome };
