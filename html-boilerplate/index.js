// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);

// const pRed = document.createElement("p");
// pRed.textContent = "Hey I'm red!";
// pRed.style.color = "red";
// container.appendChild(pRed);

// const h3 = document.createElement("h3");
// h3.textContent = "I'm a blue h3!";
// h3.style.color = "blue";

// container.appendChild(h3);

// const contentTwo = document.createElement("div");
// contentTwo.setAttribute("style", "background: pink; border: 2px solid black;");

// const h1 = document.createElement("h1");
// h1.textContent = "I'm a div";
// contentTwo.appendChild(h1);

// const pTwo = document.createElement("p");
// pTwo.textContent = "ME TOO";
// contentTwo.appendChild(pTwo);

// container.appendChild(contentTwo);


// const btn = document.querySelector("#btn");
// btn.addEventListener("click", function (e) {
//     e.target.style.background = "blue";
// });



// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         alert(button.id);
//     })
// });


const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';

    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    input.focus();
})








<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock Paper Scissors</title>
</head>
<body>
    <h1>Rock Paper Scissors</h1>

    <!-- Buttons for Player Choices -->
    <button id="rock">Rock</button>
    <button id="paper">Paper</button>
    <button id="scissors">Scissors</button>

    <!-- Div to display results -->
    <div id="results"></div>

    <script>
        // Initialize scores
        let playerScore = 0;
        let computerScore = 0;

        // Function to get computer's choice
        function getComputerChoice() {
            const choices = ["rock", "paper", "scissors"];
            const randomIndex = Math.floor(Math.random() * 3);
            return choices[randomIndex];
        }

        // Function to display the running score and results
        function updateResults(message) {
            const resultsDiv = document.querySelector("#results");
            resultsDiv.innerHTML = `
                <p>${message}</p>
                <p>Player Score: ${playerScore} - Computer Score: ${computerScore}</p>
            `;
        }

        // Function to play a round
        function playRound(playerSelection, computerSelection) {
            let resultMessage;
            if (playerSelection === computerSelection) {
                resultMessage = `It's a tie! Both selected ${playerSelection}.`;
            } else if (
                (playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "scissors" && computerSelection === "paper") ||
                (playerSelection === "paper" && computerSelection === "rock")
            ) {
                playerScore++;
                resultMessage = `You win! ${playerSelection} beats ${computerSelection}.`;
            } else {
                computerScore++;
                resultMessage = `You lose! ${computerSelection} beats ${playerSelection}.`;
            }

            // Update the results on the screen
            updateResults(resultMessage);

            // Check for winner
            if (playerScore === 5 || computerScore === 5) {
                declareWinner();
            }
        }

        // Function to declare the winner
        function declareWinner() {
            const resultsDiv = document.querySelector("#results");
            if (playerScore > computerScore) {
                resultsDiv.innerHTML += `<h2>You won the game!</h2>`;
            } else {
                resultsDiv.innerHTML += `<h2>You lost the game!</h2>`;
            }

            // Disable buttons once the game ends
            document.querySelector("#rock").disabled = true;
            document.querySelector("#paper").disabled = true;
            document.querySelector("#scissors").disabled = true;
        }

        // Event listeners for the buttons
        document.querySelector("#rock").addEventListener('click', () => {
            playRound("rock", getComputerChoice());
        });

        document.querySelector("#paper").addEventListener('click', () => {
            playRound("paper", getComputerChoice());
        });

        document.querySelector("#scissors").addEventListener('click', () => {
            playRound("scissors", getComputerChoice());
        });
    </script>
</body>
</html>
