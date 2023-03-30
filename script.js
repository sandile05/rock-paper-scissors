function game(rounds) {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 1; i <= rounds; i++) {
      const selectionPrompt = prompt('Round ' + i + ': Choose Rock, Paper or Scissors');
      const playerSelection =  selectionPrompt.toLowerCase();
      const choices = ['rock', 'paper', 'scissors'];
      const computerSelection = getComputerChoice().toLowerCase();

      function getComputerChoice(){
        let computerChoice = choices[Math.floor(Math.random() * 3)];
        return computerChoice;  
    }

    function playRound(playerSelection, computerSelection){
        if(playerSelection === computerSelection){
            return "It's a tie. " + 'computer chose ' + computerSelection
        }else if(playerSelection === 'rock' && computerSelection === 'paper'){
            
            return 'computer chose ' + computerSelection + ' You lose! Paper beats Rock'
        }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
            
            return 'computer chose ' + computerSelection + ' You lose! Scissors beats Paper'
        }else if (playerSelection === 'scissors' && computerSelection === 'rock'){
           
            return 'computer chose ' + computerSelection + ' You lose! Rock beats Scissors'
        }else if (playerSelection === 'rock' && computerSelection === 'scissors'){
            
            return "You win! Computer chose " + computerSelection
        }else if (playerSelection === 'scissors' && computerSelection === 'paper'){
            
            return "You win! Computer chose " + computerSelection
        }else if(playerSelection === 'paper' && computerSelection === 'rock'){
            
            return "You win! Computer chose " + computerSelection
        }
    };
      
      const roundResult = playRound(playerSelection, computerSelection);
  
      if(roundResult.includes('You win')){
        playerScore++;
      } else if(roundResult.includes('You lose')){
        computerScore++;
      }
  
      console.log('Round ' + i + ': ' + roundResult);
      console.log('Player score: ' + playerScore);
      console.log('Computer score: ' + computerScore);
    }
  
    console.log('Final score: Player ' + playerScore + ' - ' + computerScore + ' Computer');
  }
  
   game(5)// play 5 rounds