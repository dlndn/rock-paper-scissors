let computerChoice = "";
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const WIN = "win";
const LOSE = "lose";
const TIE = "tie";
const TOTAL_ROUNDS = 5;
const TOTAL_CHOICES = 3;

let rockButton = document.querySelector('#rockButton');
let paperButton = document.querySelector('#paperButton');
let scissorsButton = document.querySelector('#scissorsButton');

function getComputerChoice() {
    let choices = [ROCK, PAPER, SCISSORS];
    return choices[Math.floor(Math.random() * TOTAL_CHOICES)];
}

function getPlayerChoice() {
    let playerChoice = "";

    while (playerChoice == "") {
        playerChoice = prompt("Please enter \"Rock\", \"Paper\", or \"Scissors\".").toLowerCase();
        
        if (playerChoice == ROCK ||
            playerChoice == PAPER ||
            playerChoice == SCISSORS) {
            return playerChoice;

        } else {
            alert("Invalid input. Please only choose \"Rock\", \"Paper\", or \"Scissors\".");
            playerChoice = ""; //clear input
        }
    }
}

function displayResult(result) {
    let resultsDisplay = document.querySelector('#resultsDisplay');
    resultsDisplay.textContent = ''; //clear previous result
    resultsDisplay.textContent += (result + '');
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    let resultsLog = "";

    //losing conditions
    if ((playerSelection == ROCK && computerSelection == PAPER) || 
        (playerSelection == PAPER && computerSelection == SCISSORS) ||
        (playerSelection == SCISSORS && computerSelection == ROCK)) {
        resultsLog = "You lose! " + computerSelection + " beats " + playerSelection;
        displayResult(resultsLog);
        result = LOSE;

    //winning conditions
    } else if  ((playerSelection == ROCK && computerSelection == SCISSORS) || 
                (playerSelection == PAPER && computerSelection == ROCK) ||
                (playerSelection == SCISSORS && computerSelection == PAPER)) {
        resultsLog = "You win! " + playerSelection + " beats " + computerSelection;
        displayResult(resultsLog);
        result = WIN;
    
    //tie
    } else {
        resultsLog = "It's a tie! You both picked " + playerSelection + ".";
        displayResult(resultsLog);
        result = TIE;
    }

    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult = "";

    for (let i=0; i<TOTAL_ROUNDS; i++) {
        roundResult = playRound(getPlayerChoice(), getComputerChoice());

        if (roundResult == WIN) {
            playerScore++;

        } else if (roundResult == LOSE) {
            computerScore++;

        } else {
            playerScore++;
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("Game over. You have won the game!");

    } else if (playerScore < computerScore) {
        console.log("Game over. You have lost the game!");

    } else {
        console.log("Game over. The game is tied!")
    }
}

rockButton.addEventListener('click', () => {
    playRound(ROCK, getComputerChoice());
});

paperButton.addEventListener('click', () => {
    playRound(PAPER, getComputerChoice());
});

scissorsButton.addEventListener('click', () => {
    playRound(SCISSORS, getComputerChoice());
});