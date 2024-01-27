// Rock Paper Scissors

//Scissors beats Paper, Lizard
//loses Spock, Rock

//Rock beats Lizard, Scissors
//loses Paper, Spock

//Paper beats Rock, Spock
//loses Scissors, Lizard

//Lizard beats Paper, Spock
//loses Scissors, Rock

//Spock beats Scissors, Rock
//loses Paper, Lizard

const choices= ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random()*5)]; 
    let result ="";
    
    if (playerChoice === computerChoice){
        result="It's a tie";
    }
    else{
        switch(playerChoice){
            case "rock": 
                result = (computerChoice === "scissors" or "lizard") ? "You Win" : "You Lose";
                break;
            case "paper":
                result = (computerChoice === "rock" or "spock") ? "You Win" : "You Lose";
                break;
            case "scissors":
                result = (computerChoice === "paper" or "lizard") ? "You Win" : "You Lose";
                break;
            case "lizard":
                result = (computerChoice === "paper" or"spock") ? "You Win" : "You Lose";
                break;
            case "spock":
                result = (computerChoice === "scissors" or "rock") ? "You Win" : "You Lose";
                break;
        }
    }

    playerDisplay. textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay. textContent = result;
}

