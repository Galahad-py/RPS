// function add7(number1, number2) {
//     return number1 + number2;
// }

// console.log(add7(2, 1));



// function multiply(number1, number2) {
//     return number1 * number2;
// }

// console.log(multiply(2, 1));


// function capitalize(word) {
//     let newWord = word.slice(0,1).toUpperCase();
//     let restWord = word.slice(1).toLowerCase();
//     return newWord + restWord
// }
// console.log(capitalize("iNCREDIBLE"));


// function lastLetter (word) {
//     return word[word.length -1];
// }

// console.log(lastLetter("abcd"))




 
//rock paper scissors game

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


let playerScore;
let computerScore;

function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice().toLowerCase();;
        const playerSelection = getHumanChoice().toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(declareWinner());
}

function declareWinner() {
    if (playerScore === computerScore) {
        alert (`${playerScore} - ${computerScore} tie Game!`);
        return (`${playerScore} - ${computerScore} tie Game!`);
    } else if (playerScore > computerScore) {
       alert (`${playerScore} - ${computerScore} You Win!`);
            return (`${playerScore} - ${computerScore} You Win!`);
    } else {
        alert (`${playerScore} - ${computerScore} You Lost!`);
        return (`${playerScore} - ${computerScore} You Lost!`);
    }
}

// this gets input from the user and checks if it is a valid entry
function getHumanChoice () {
    let playerSelection = prompt("Rock, Paper, Scissors?",);
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        return playerSelection;
    } else {
        alert("That is not a Valid choice")
        return getHumanChoice();
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("Tie game!");
        return `Tie game! 
            Computer Score: ${computerScore}
            Player Score: ${playerScore}
            Play again`;
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "scissors" && computerSelection == "paper") || 
        (playerSelection == "paper" && computerSelection == "rock") 
    )   {
        playerScore++;
        alert (`You win! ${playerSelection} beats ${computerSelection}`);
        return `Computer Score: ${computerScore}
        Your Score: ${playerScore}`;
    } else {
        computerScore++;
        alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return `Computer Score: ${computerScore}
        Your Score: ${playerScore}`;
    }
}

//start the game
game();