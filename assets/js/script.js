//game starts on menu
//-easymode (rock paper scissors)
//-hardmode (rock, paper, scissors, lizard, spock)
//rules
//rounds

/**easymode selected- menu closes, game begins with only rock paper scissors,
 computer can only pick rock paper or scissors, results, lose a life or computer lose a life offer continue or return to menu, next round depending on number of lives
 Game over screen once lives are depleted (either win or lose) offer return to menu

hardmode selected- menu closes, game begins with rock paper scissors lizard spock,
results, lose a life or computer lose a life offer continue or return to menu, next round depending on number of lives
Game over screen once lives are depleted (either win or lose) offer return to menu

rules-the rules for the game

rounds- how many lives are selected**/

let difficulty = '';

let icons = {
    "rock": "<i class=\"fa-regular fa-hand-back-fist\"></i>",
    "paper": "<i class=\"fa-regular fa-hand\"></i>",
    "scissors":"< i class=\"fa-regular fa-hand-scissors\" ></i >",
    "lizard": "<i class=\"fa-regular fa-hand-lizard\"></i>",
    "spock": "<i class=\"fa-regular fa-hand-spock\"></i>"
}

//Menu Modal
//start easy mode
function startGameEasy(){

}
//start hard mode
function startGameHard() {

}

// Rules Modal 
function openRulesModal() {
    document.getElementById('rulesModal').style.display = 'block';
}

function closeRulesModal() {
    document.getElementById('rulesModal').style.display = 'none';
}

window.onclick = function (event) {
    let modal = document.getElementById('rulesModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

//rounds
function openRoundsModal() {
    document.getElementById('roundsModal').style.display =  'block';   
}
function closeRoundsModal() {
    document.getElementById('roundsModal').style.display = 'none';
}

let btns= document.querySelectorAll(".circle-button");

btns.forEach(btn=>{
    btn.addEventListener("click", function(e) {
        playGame(this.value);
    });
});


function playGame(playerChoice) {
    let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    let result = '';

    if (playerChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
        (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
        (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
        (playerChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
        (playerChoice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock'))
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }
   
    openResultModal(playerChoice, computerChoice, result);
}

// Result Modal 
function openResultModal(playerChoice, computerChoice, result) {
    document.getElementById('resultModal').style.display = 'block';
    document.getElementById('result').innerHTML = `You chose ${icons[playerChoice]}, computer chose ${icons[computerChoice]}. ${result}`;
}

function closeResultModal() {
    document.getElementById('resultModal').style.display = 'none';
}