let playerScore = 0;
let computerScore = 0;

// Computer Choices
let choice = ['rock', 'paper', 'scissors'];

// Getting Computer to select random choice
function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}

// Button clicked with choice and playing round
let selectedValue = '';
let result = '';
let gameResult = '';

const buttons = document.querySelectorAll('.game-button');
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        if (playerScore !== 5 && computerScore !== 5) {
            selectedValue = this.value;
            playRound();
        }
    });
});

// Play round and return who wins
function playRound() {
    const playerSelection = selectedValue;
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        result = document.getElementById('round-winner').textContent = 'Tie! No winner this round.';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
    ) {
        if (computerScore < 5 && playerScore !== 5) {
            computerScore++;
        }
        result = document.getElementById('round-winner').textContent = `You lose ${playerSelection} beats ${computerSelection}`;
    } else if (
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'rock' && computerSelection === 'scissors')
    ) {
        if (playerScore < 5 && computerScore !== 5) {
            playerScore++;
        }
        result = document.getElementById('round-winner').textContent = `You win ${playerSelection} beats ${computerSelection}`;
    }

    // Update the score display
    document.getElementById('score').innerHTML = `Your Score: ${playerScore} <br> Computer Score: ${computerScore}`;

    // Check and display the final winner
    if (playerScore === 5) {
        gameResult = document.getElementById('game-winner').textContent = `You beat the computer by ${playerScore - computerScore}. Humanity still has a chance!`;
    } else if (computerScore === 5) {
        gameResult = document.getElementById('game-winner').textContent = `The Computer beat you by ${computerScore - playerScore}. The machines are taking over!`;
    }
    // Check if the game is over
    /*if (playerScore === 5 || computerScore === 5) {
        gameResult = document.getElementById('game-over').textContent = 'Play Again?';
    }*/
    let modal = document.querySelector(".modal")
    if (playerScore ===5 || computerScore ===5) {
        modal.classList.toggle("show-modal")
    }
}
