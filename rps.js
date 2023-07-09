let getComputerChoice = () => {
    let randNum = Math.floor(Math.random() * (3) + 1);
    if (randNum == 1){
        return 'Rock';
    }
    else if (randNum == 2){
        return 'Paper';
    }
    else{
        return 'Scissors';
    }
}

let playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    
    if (playerSelection == `rock`){
        if (computerSelection == `paper`){
            return `You lose! Paper beats Rock`
        }
        else if (computerSelection == `scissors`){
            return `You Win! Rock beats Scissors`
        }
        else return `Tie`
    }
    else if (playerSelection == `paper`){
        if (computerSelection == `scissors`){
            return `You lose! Scissors beats Paper`
        }
        else if (computerSelection == `rock`){
            return `You Win! Paper beats Rock`
        }
        else return `Tie`
    }
    else if (playerSelection == `scissors`){
        if (computerSelection == `rock`){
            return `You lose! Rock beats Scissors`
        }
        else if (computerSelection == `paper`){
            return `You Win! Scissors beats Paper`
        }
        else return `Tie`
    }

  }

  let game = () => {
    for (let i = 0; i < 5; i++) {
        let playerSelect = prompt("Make selection (Rock, Paper or Scissor): ", 'Rock');
        let computerSelect = getComputerChoice();
        let result = playRound(playerSelect, computerSelect)
        console.log(result);
      }
  }
   
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));


game()