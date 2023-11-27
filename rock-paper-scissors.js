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

let playerScore = STARTING_SCORE;
let computerScore = STARTING_SCORE;
let roundResult = "";

function getComputerChoice() {
    let choices = [ROCK, PAPER, SCISSORS];
    return choices[Math.floor(Math.random() * TOTAL_CHOICES)];
}

function displayResult(result) {
    let resultsDisplay = document.querySelector('#resultsDisplay');
    resultsDisplay.textContent = result;
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    let resultsLog = "";

    //losing conditions
    if ((playerSelection == ROCK && computerSelection == PAPER) || 
        (playerSelection == PAPER && computerSelection == SCISSORS) ||
        (playerSelection == SCISSORS && computerSelection == ROCK)) {
        resultsLog = "You lose! " + computerSelection + " beats " + playerSelection + ".";
        result = LOSE;

    //winning conditions
    } else if  ((playerSelection == ROCK && computerSelection == SCISSORS) || 
                (playerSelection == PAPER && computerSelection == ROCK) ||
                (playerSelection == SCISSORS && computerSelection == PAPER)) {
        resultsLog = "You win! " + playerSelection + " beats " + computerSelection + ".";
        result = WIN;
    
    //tie
    } else {
        resultsLog = "It's a tie! You both picked " + playerSelection + ".";
        result = TIE;
    }
    
    displayResult(resultsLog);
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
    let gameResult = "";
    let resultsDisplay = document.querySelector('#resultsDisplay');

    if (playerScore == WINNING_SCORE) {
        gameResult = "Game Over. You won the game!";

    } else if (computerScore == WINNING_SCORE) {
        gameResult = "Game Over. You lost the game!";
    } else {
        gameResult = "Game Over. It is a tie!";
    }

    resultsDisplay.textContent += " " + gameResult;
}

function clickHandler(playerChoice) {
    roundResult = playRound(playerChoice, getComputerChoice());
        
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
}

function game() {
    let rockButton = document.querySelector('#rockButton');
    let paperButton = document.querySelector('#paperButton');
    let scissorsButton = document.querySelector('#scissorsButton');

    rockButton.addEventListener('click', () => clickHandler(ROCK));
    paperButton.addEventListener('click', () => clickHandler(PAPER));
    scissorsButton.addEventListener('click', () => clickHandler(SCISSORS));
}

game();