playerScore = 0;
computerScore = 0; 
//Computer Choices
let choice = ['rock', 'paper', 'scissors'];
//Getting Computer to select random choice
function getComputerChoice() {
    return (choice[(Math.floor(Math.random() * choice.length))]);
}

//Buuton clicked with choice and playing round
let selectedValue = '';
let result = '';
const buttons = document.querySelectorAll('.game-button');

buttons.forEach(function (i){
   i.addEventListener('click', function() {
       selectedValue = this.value;
       playRound()
       console.log(result);  
   });
});

//Give player Round Winner
//result = document.getElementById('round-winner').innerHTML



// Play round and return who wins
function playRound(playerSelection, computerSelection){
    playerSelection = selectedValue;
    computerSelection = getComputerChoice();
    //document.getElementById('round-winner').textContent = `${result}`

        if (playerSelection === computerSelection){
           return result = document.getElementById('round-winner').textContent = ('Tie! No winner this round.')
        }else if((playerSelection === 'rock' && computerSelection === 'paper')
        ||(playerSelection === 'paper' && computerSelection === 'scissors')
        ||(playerSelection === 'scissors' && computerSelection === 'rock')){
            if (computerScore <= 5) {
                computerScore++;
            }
            return result = document.getElementById('round-winner').textContent = (`You lose ${playerSelection} beats ${computerSelection}`)
        }else if((playerSelection === 'paper' && computerSelection === 'rock')
        ||(playerSelection === 'scissors' && computerSelection === 'paper')
        ||(playerSelection === 'rock' && computerSelection === 'scissors')){
            if (playerScore <=5) {
                playerScore++;
            }
            return result =document.getElementById('round-winner').textContent = (`You win ${playerSelection} beats ${computerSelection}`)  
        }else {
            return result = document.getElementById('round-winner').textContent = ('That is not a valid selection')
        }
        
    }
    
//Play 5 rounds of rps and keep score and give winner at the end of the game

/*let n = ''
const game = () => {
    let i =1;

    while (i <= 5) {
        console.log(playRound())
        i++
    }
    if (playerScore > computerScore) {
        return `You beat the computer by ${playerScore - computerScore}. Great Job!`
    }else if (computerScore > playerScore) {
        return `The Computer beat you by ${computerScore - playerScore}. The machines are taking over!`
    }else {
        return "You both lose, life ain't fair and the world is mean!" 
    }
}
*/