function game(rounds) {
  let playerScore = 0;
  let computerScore = 0;
  let round = 0;
  const playScore = document.querySelector('#player-score');
  const compScore = document.querySelector('#computer-score');
  const currentRound = document.querySelector('#current-round');
  currentRound.innerHTML = round;
  const buttons = document.querySelectorAll('button');

  playScore.innerHTML = playerScore;
  compScore.innerHTML = computerScore;

  const text3 = document.querySelector('#text3');
  const text4 = document.querySelector('#text4');

  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
  }

  function playRound(playerChoice) {
    const computerSelection = getComputerChoice().toLowerCase();

    if (playerChoice === computerSelection) {
      return "It's a tie. " + 'computer chose ' + computerSelection;
    } else if (playerChoice === 'rock' && computerSelection === 'paper') {
      computerScore++;
      compScore.innerHTML = computerScore;
      return 'computer chose ' + computerSelection + ' You lose! Paper beats Rock';
    } else if (playerChoice === 'paper' && computerSelection === 'scissors') {
      computerScore++;
      compScore.innerHTML = computerScore;
      return 'computer chose ' + computerSelection + ' You lose! Scissors beats Paper';
    } else if (playerChoice === 'scissors' && computerSelection === 'rock') {
      computerScore++;
      compScore.innerHTML = computerScore;
      return 'computer chose ' + computerSelection + ' You lose! Rock beats Scissors';
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

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (round < 5) {
        const playerChoice = button.textContent.toLowerCase();
        const roundResult = playRound(playerChoice);
        text3.innerHTML = roundResult;
        round++;
        currentRound.innerHTML = round;

        console.log('Round ' + (round) + ': ' + roundResult);
        console.log('Player score: ' + playerScore);
        console.log('Computer score: ' + computerScore);

        if (round === 5) {
          text4.innerHTML = 'Final score: Player ' + playerScore + ' - ' + computerScore + ' Computer';
        }
      }
    });
  });
}

game(5); // play 