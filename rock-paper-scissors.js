let computerChoice = "";
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

function getComputerChoice() {
    let choices = [ROCK, PAPER, SCISSORS];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let result = "";

    //losing conditions
    if ((playerSelection == ROCK && computerSelection == PAPER) || 
        (playerSelection == PAPER && computerSelection == SCISSORS) ||
        (playerSelection == SCISSORS && computerSelection == ROCK)) {
        result = "You lose! " + computerSelection + " beats " + playerSelection;

    //winning conditions
    } else if  ((playerSelection == ROCK && computerSelection == SCISSORS) || 
                (playerSelection == PAPER && computerSelection == ROCK) ||
                (playerSelection == SCISSORS && computerSelection == PAPER)) {
        result = "You win! " + playerSelection + " beats " + computerSelection;
    
    //tie
    } else {
        result = "It's a tie! You both picked " + playerSelection + ".";
    }

    return result;
}
