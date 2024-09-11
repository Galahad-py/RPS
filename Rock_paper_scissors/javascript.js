// UI
//rock paper scissors game
let playerScore = 0;
let computerScore = 0;

// this function gets the computer choice
function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3) +1;
    if (computerChoice === 1) {
        return "rock";
    }
    else if (computerChoice === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
} 

//this Function displays the running score and results
function updateResults(message) {
    const resultsDiv  = document.querySelector('#results');
    resultsDiv.innerHTML = 
        `${message}<br>
        Player Score: ${playerScore}<br>
        Computer Score: ${computerScore}`;
}

//this Function plays a round
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        resultMessage = `It's a tie! both players selected ${playerSelection}.`

    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "scissors" && computerSelection == "paper") || 
        (playerSelection == "paper" && computerSelection == "rock") 
    )   {
        playerScore++;
        resultMessage = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        resultMessage = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }

    // this updates the result on the screen
    updateResults(resultMessage);

    // this checks for the winner
    if (playerScore === 5 || computerScore === 5) {
        declareWinner();
    }
}

// this function declares a winner
function declareWinner() {
    const resultsDiv = document.querySelector('#results');
    if (playerScore > computerScore) {
        resultsDiv.textContent = `You Win!`
    } else if (playerScore < computerScore) {
        resultsDiv.textContent = `You Lost!!`
    } else {
        resultsDiv.textContent = `Tie Game!`
    }
    
    // thsi disables the buttons once the game is over
    document.querySelector('#rock').disabled = true;
    document.querySelector('#paper').disabled = true;
    document.querySelector('#scissors').disabled = true;
}


//add event listeners to button
document.querySelector('#rock').addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

document.querySelector('#paper').addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

document.querySelector('#scissors').addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});



