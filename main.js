playerScore = 0;
computerScore = 0; 
//Computer Choices
let choice = ['rock', 'paper', 'scissors'];
//Getting Computer to select random choice
function getComputerChoice() {
    return (choice[(Math.floor(Math.random() * choice.length))]);
}

// Play round and return who wins
function playRound(playerSelection, computerSelection){
    let value = prompt('Please enter your choice', '');
    playerSelection = value.toLowerCase();
    computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
        if (playerSelection === computerSelection){
           return 'Tie! No winner this round.'
        }else if((playerSelection === 'rock' && computerSelection === 'paper')
        ||(playerSelection === 'paper' && computerSelection === 'scissors')
        ||(playerSelection === 'scissors' && computerSelection === 'rock')){
            if (computerScore <= 5) {
                computerScore++;
            }
            return `You lose ${playerSelection} beats ${computerSelection}`
        }else if((playerSelection === 'paper' && computerSelection === 'rock')
        ||(playerSelection === 'scissors' && computerSelection === 'paper')
        ||(playerSelection === 'rock' && computerSelection === 'scissors')){
            if (playerScore <=5) {
                playerScore++;
            }
            return `You win ${playerSelection} beats ${computerSelection}`  
        }else {
            return 'That is not a valid selection'
        }
    }

//Play 5 rounds of rps and keep score and give winner at the end of the game

let n = ''
const game = () => {
    let i =1;

    while (i <= 5) {
        console.log(playRound())
        i++
    }
    if (playerScore > computerScore) {
        return `You beat the compter by ${playerScore - computerScore}. Great Job!`
    }else if (computerScore > playerScore) {
        return `The Computer beat you by ${computerScore - playerScore}. The machines are taking over!`
    }else {
        return "You both lose, life ain't fair and the world is mean!" 
    }
}

console.log(game());