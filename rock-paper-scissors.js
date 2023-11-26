let computerChoice = "";
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const WIN = "win";
const LOSE = "lose";
const TIE = "tie";
const TOTAL_ROUNDS = 5;
const TOTAL_CHOICES = 3;
const WINNING_SCORE = 5;
const STARTING_SCORE = 0;

let rockButton = document.querySelector('#rockButton');
let paperButton = document.querySelector('#paperButton');
let scissorsButton = document.querySelector('#scissorsButton');

function getComputerChoice() {
    let choices = [ROCK, PAPER, SCISSORS];
    return choices[Math.floor(Math.random() * TOTAL_CHOICES)];
}

function displayResult(result) {
    let resultsDisplay = document.querySelector('#resultsDisplay');
    let newResult = document.createElement('p');
    newResult.textContent = result;
    resultsDisplay.appendChild(newResult);
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

function updateDisplayedScores(playerScore, computerScore) {
    let playerScoreDisplay = document.querySelector("#playerScore");
    let computerScoreDisplay = document.querySelector("#computerScore");

    playerScoreDisplay.textContent = "Player: " + playerScore;
    computerScoreDisplay.textContent = "Computer: " + computerScore;
}

function isGameOver(playerScore, computerScore) {
    if (playerScore == WINNING_SCORE || computerScore == WINNING_SCORE) {
        return true;
    }

    return false
}

function gameOver(playerScore, computerScore) {
    if (playerScore == WINNING_SCORE) {
        displayResult("Game Over. You won the game!");
    }

    if (computerScore == WINNING_SCORE) {
        displayResult("Game Over. You lost the game!");
    }

    if (computerScore == playerScore) {
        displayResult("Game Over. It is a tie!");
    }
}

function game() {
    let playerScore = STARTING_SCORE;
    let computerScore = STARTING_SCORE;
    let roundResult = "";

    let rockButton = document.querySelector('#rockButton');
    let paperButton = document.querySelector('#paperButton');
    let scissorsButton = document.querySelector('#scissorsButton');

    rockButton.addEventListener('click', () => {
        roundResult = playRound(ROCK, getComputerChoice());
        
        if (roundResult == WIN) {
            playerScore++; 
        }
        
        if (roundResult == LOSE) {
            computerScore++;
        }

        updateDisplayedScores(playerScore, computerScore);

        if (isGameOver(playerScore, computerScore)) {
            gameOver(playerScore, computerScore);
            playerScore = STARTING_SCORE;
            computerScore = STARTING_SCORE;
        }
    });
    
    paperButton.addEventListener('click', () => {
        
        roundResult = playRound(PAPER, getComputerChoice());
        
        if (roundResult == WIN) {
            playerScore++; 
        }
        
        if (roundResult == LOSE) {
            computerScore++;
        }
        
        updateDisplayedScores(playerScore, computerScore);

        if (isGameOver(playerScore, computerScore)) {
            gameOver(playerScore, computerScore);
            playerScore = STARTING_SCORE;
            computerScore = STARTING_SCORE;
        }
    });
    
    scissorsButton.addEventListener('click', () => {
        roundResult = playRound(SCISSORS, getComputerChoice());

        if (roundResult == WIN) {
            playerScore++; 
        }
        
        if (roundResult == LOSE) {
            computerScore++;
        }

        updateDisplayedScores(playerScore, computerScore);

        if (isGameOver(playerScore, computerScore)) {
            gameOver(playerScore, computerScore);
            playerScore = STARTING_SCORE;
            computerScore = STARTING_SCORE;
        }
    }); 
}

game();