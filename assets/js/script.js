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
    //playerchoice
    if (playerChoice === 'rock') {
        playerChoice = '<i class="fa-regular fa-hand-back-fist"></i>'
    };
    if (playerChoice === 'paper') {
        playerChoice = '<i class="fa-regular fa-hand"></i>'
    };
    if (playerChoice === 'scissors') {
        playerChoice = '<i class="fa-regular fa-hand-scissors"></i>'
    };
    if (playerChoice === 'lizard') {
        playerChoice = '<i class="fa-regular fa-hand-lizard"></i>'
    };
    if (playerChoice === 'spock') {
        playerChoice = '<i class="fa-regular fa-hand-spock"></i>'
    };

    //computer choice
    if (computerChoice === 'rock') {
        computerChoice = '<i class="fa-regular fa-hand-back-fist"></i>'
    };
    if (computerChoice === 'paper') {
        computerChoice = '<i class="fa-regular fa-hand"></i>'
    };
    if (computerChoice === 'scissors') {
        computerChoice = '<i class="fa-regular fa-hand-scissors"></i>'
    };
    if (computerChoice === 'lizard') {
        computerChoice = '<i class="fa-regular fa-hand-lizard"></i>'
    };
    if (computerChoice === 'spock') {
        computerChoice = '<i class="fa-regular fa-hand-spock"></i>'
    };

    document.getElementById('resultModal').style.display = 'block';
    document.getElementById('result').innerHTML = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}
function closeResultModal() {
    document.getElementById('resultModal').style.display = 'none';
}

// Rules Modal 
function openRulesModal() {
    document.getElementById('rulesModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('rulesModal').style.display = 'none';
}

window.onclick = function (event) {
    let modal = document.getElementById('rulesModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};