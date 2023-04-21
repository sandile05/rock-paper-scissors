const myHiddenElement = document.querySelector("#content");
myHiddenElement.style.display = "none";
const myButton = document.querySelector("#start-button");
const text3 = document.querySelector("#text3");
text3.innerHTML = "";

// This function takes an argument 'rounds', which is set to 5 when the game function is called
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let round = 0;

  // Get the DOM elements for the player score, computer score and current round
  const playScore = document.querySelector("#player-score");
  const compScore = document.querySelector("#computer-score");
  const currentRound = document.querySelector("#current-round");

  const buttons = document.querySelectorAll("button");
  const text2 = document.querySelector("#text2");
  text2.innerHTML = '"may the odds be in your favor"';

  // const startButton = document.getElementById('start-button');
  // const myDiv = document.getElementById('result-text');

  // Set the current round to 0 and display the scores on the screen
  currentRound.innerHTML = round;
  playScore.innerHTML = playerScore;
  compScore.innerHTML = computerScore;

  // Get the DOM elements for the round result and final result display

  const text4 = document.querySelector("#text4");

  // Function to randomly select a choice for the computer
  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
  }
  // Function to play a single round of the game
  function playRound(playerChoice) {
    const computerSelection = getComputerChoice().toLowerCase();

    if (playerChoice === computerSelection) {
      return "It's a tie. " + "Computer chose " + computerSelection;
    } else if (playerChoice === "rock" && computerSelection === "paper") {
      computerScore++;
      compScore.innerHTML = computerScore;
      return (
        "Computer chose " + computerSelection + " You lose! Paper beats Rock"
      );
    } else if (playerChoice === "paper" && computerSelection === "scissors") {
      computerScore++;
      compScore.innerHTML = computerScore;
      return (
        "Computer chose " +
        computerSelection +
        " You lose! Scissors beats Paper"
      );
    } else if (playerChoice === "scissors" && computerSelection === "rock") {
      computerScore++;
      compScore.innerHTML = computerScore;
      return (
        "Computer chose " + computerSelection + " You lose! Rock beats Scissors"
      );
    } else if (playerChoice === "rock" && computerSelection === "scissors") {
      playerScore++;
      playScore.innerHTML = playerScore;
      return "You win! Computer chose " + computerSelection;
    } else if (playerChoice === "scissors" && computerSelection === "paper") {
      playerScore++;
      playScore.innerHTML = playerScore;
      return "You win! Computer chose " + computerSelection;
    } else if (playerChoice === "paper" && computerSelection === "rock") {
      playerScore++;
      playScore.innerHTML = playerScore;
      return "You win! Computer chose " + computerSelection;
    }
  }

  // Add a click event listener to the restart button that resets the game and removes the button
  function endGame() {
    const gameContainer = document.querySelector("#game-container");
    gameContainer.innerHTML += '<button id="restart">Restart Game</button>';
    const restartBtn = document.querySelector("#restart");
    restartBtn.addEventListener("click", () => {
      playerScore = 0;
      computerScore = 0;
      round = 1;
      playScore.innerHTML = playerScore;
      compScore.innerHTML = computerScore;
      currentRound.innerHTML = round;
      text2.innerHTML = '"may the odds be in your favor"';
      text3.innerHTML = "";
      text4.innerHTML = "";
      gameContainer.removeChild(restartBtn);
      buttons.forEach((button) => {
        button.disabled = false;
      });
    });
  }

  // This code block is adding a click event listener to each button in the array of buttons.
  // In other words, this code block handles the logic for when a button is clicked during the game and updates the game state accordingly.
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Checks if the current round is less than 5.
      if (playerScore < 6 || computerScore < 6) {
        const playerChoice = button.textContent.toLowerCase();
        const roundResult = playRound(playerChoice);
        text3.innerHTML = roundResult;
        round++;
        currentRound.innerHTML = round;
  
        // If the current round is equal to 5, displays the final score and disables the buttons.
        if (playerScore === 5 || computerScore === 5) {
          text4.innerHTML =
            "Final score: Player " +
            playerScore +
            " - " +
            computerScore +
            " Computer";
          text2.innerHTML = "";
  
          endGame();
  
          // Disable the buttons
          buttons.forEach((button) => {
            button.disabled = true;
          });
        }
      }
    });
  });

  myButton.addEventListener("click", () => {
    myHiddenElement.style.display = "block";
    myButton.style.display = "none";
    text3.innerHTML = "";
  });
}

game(); //call the game function
