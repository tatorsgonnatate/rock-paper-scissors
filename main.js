let value = prompt('Please enter your choice', '')

let choice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return (choice[(Math.floor(Math.random() * choice.length))]);
}



function playRound(playerSelection, computerSelection){
    playerSelection = value.toLowerCase();
    computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
        if(playerSelection === 'rock' && computerSelection === 'paper'){
            return 'You Lose! Paper covers Rock.'
        } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
            return 'You Lose! Scissors cut Paper.'
        } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
            return 'You Lose! Rock breaks Scissors.'
        } else if (playerSelection === 'paper' && computerSelection === 'rock'){
            return 'You Win! Paper covers Rock. '
        } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
            return 'You win! Scissors cut Paper.'
        } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
            return 'You Win! Rock breaks Scissors.'
        } else if (playerSelection === computerSelection){
            return 'Tie! No winner this round.'
        } else {
            return 'That is not a valid selection'
        }
    }
 
console.log(playRound());

