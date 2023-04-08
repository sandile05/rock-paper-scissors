// This function takes an argument 'rounds', which is set to 5 when the game function is called
function game(rounds) {
  let playerScore = 0;
  let computerScore = 0;
  let round = 0;

  // Get the DOM elements for the player score, computer score and current round
  const playScore = document.querySelector('#player-score');
  const compScore = document.querySelector('#computer-score');
  const currentRound = document.querySelector('#current-round');
  
  const buttons = document.querySelectorAll('button');
  const text2 = document.querySelector('#text2');
  text2.innerHTML = 'You May Begin';

  // Set the current round to 0 and display the scores on the screen
  currentRound.innerHTML = round;
  playScore.innerHTML = playerScore;
  compScore.innerHTML = computerScore;

  // Get the DOM elements for the round result and final result display
  const text3 = document.querySelector('#text3');
  const text4 = document.querySelector('#text4');

  // Function to randomly select a choice for the computer
  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
  }
  // Function to play a single round of the game
  function playRound(playerChoice) {
    const computerSelection = getComputerChoice().toLowerCase();

    if (playerChoice === computerSelection) {
      return "It's a tie. " + 'Computer chose ' + computerSelection;
    } else if (playerChoice === 'rock' && computerSelection === 'paper') {
      computerScore++;
      compScore.innerHTML = computerScore;
      return 'Computer chose ' + computerSelection + ' You lose! Paper beats Rock';
    } else if (playerChoice === 'paper' && computerSelection === 'scissors') {
      computerScore++;
      compScore.innerHTML = computerScore;
      return 'Computer chose ' + computerSelection + ' You lose! Scissors beats Paper';
    } else if (playerChoice === 'scissors' && computerSelection === 'rock') {
      computerScore++;
      compScore.innerHTML = computerScore;
      return 'Computer chose ' + computerSelection + ' You lose! Rock beats Scissors';
    } else if (playerChoice === 'rock' && computerSelection === 'scissors') {
      playerScore++;
      playScore.innerHTML = playerScore;
      return "You win! Computer chose " + computerSelection;
    } else if (playerChoice === 'scissors' && computerSelection === 'paper') {
      playerScore++;
      playScore.innerHTML = playerScore;
      return "You win! Computer chose " + computerSelection;
    } else if (playerChoice === 'paper' && computerSelection === 'rock') {
      playerScore++;
      playScore.innerHTML = playerScore;
      return "You win! Computer chose " + computerSelection;
    }
  }

  // Add a click event listener to the restart button that resets the game and removes the button
  function endGame() {
    const gameContainer = document.querySelector('#game-container');
    gameContainer.innerHTML += '<button id="restart">Restart Game</button>';
    const restartBtn = document.querySelector('#restart');
    restartBtn.addEventListener('click', () => {
      playerScore = 0;
      computerScore = 0;
      round = 0;
      playScore.innerHTML = playerScore;
      compScore.innerHTML = computerScore;
      currentRound.innerHTML = round;
      text2.innerHTML = 'You may begin'
      text3.innerHTML = '';
      text4.innerHTML = '';
      gameContainer.removeChild(restartBtn);
      buttons.forEach(button => {
        button.disabled = false;
      });
    });
  }

  // This code block is adding a click event listener to each button in the array of buttons.
  // In other words, this code block handles the logic for when a button is clicked during the game and updates the game state accordingly.
  buttons.forEach(button => {
    button.addEventListener('click', () => {

      // Checks if the current round is less than 5.
      if (round < 5) {
        const playerChoice = button.textContent.toLowerCase(); // Gets the player's choice by accessing the textContent property of the button element and converting it to lowercase.
        const roundResult = playRound(playerChoice); //Plays a round of the game using the playRound function and passes the player's choice as an argument.
        text3.innerHTML = roundResult; //Displays the result of the round by updating the innerHTML property of the text3 element with the round result.
        round++;
        currentRound.innerHTML = round;

        // If the current round is equal to 5, displays the final score by updating the innerHTML property of the text4 element with the player score, computer score, and the "Final score" message, and calls the endGame function to handle resetting the game.
        if (round === 5) {
          text4.innerHTML = 'Final score: Player ' + playerScore + ' - ' + computerScore + ' Computer', text2.innerHTML = '';
          
          endGame();
        }
      }
    });
  });
}

game(5); //call the game function and play 5 round