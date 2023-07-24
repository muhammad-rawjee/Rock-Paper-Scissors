const buttons = document.querySelectorAll('.choice > #btn');
const currRound = document.querySelector('.res-cont > .curr-round');
const finalRes = document.querySelector('.res-cont > .final-res');
const PScore = document.querySelector('.human-cont > .info > .stats > .score');
const CScore = document.querySelector('.comp-cont > .info > .stats > .score');

//console.log(PScore);
let playerScore = 0;
let computerScore = 0;

// Fin
let disableButtons = () => {
    buttons.forEach(button => {
        button.disabled = true
    })
}

// Fin
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

// Fin
let determineWinner = (user, computer) => {
    if (user === computer) {
        return "It's a tie!";
    } else if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

let playRound = (playerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();
    const result = determineWinner(playerSelection, computerSelection);
    
    if (computerScore == 5 || playerScore == 5){
        displayFinalRes();
    }

    currRound.textContent = `Current Round Result: ${result}`;

    if (result == "You win!" && playerScore < 5){
        playerScore += 1
        PScore.textContent = `Score: ${playerScore}`
    }
    else if (result == "You lose!" && computerScore < 5){
        computerScore += 1
        CScore.textContent = `Score: ${computerScore}`
    }
  }

let displayFinalRes = () => {
    disableButtons();
    const parent = document.querySelector('.res-cont');
    const button = document.createElement('button');
    button.classList.add('try-again')
    button.textContent = `Try Again`
    parent.appendChild(button)
    
    button.addEventListener('click', () => {
        location.reload();
    });

    if (playerScore == 5){
        finalRes.textContent = `Final result: Congratulation! You won!`
    }
    else{
        finalRes.textContent = `Final result: Hard Luck! You lose!`
    }
}

// Event Listeners
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.className;
        playRound(playerSelection);
        });
    });