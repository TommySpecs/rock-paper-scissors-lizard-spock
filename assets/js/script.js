let life = 0;

function playGame(playerChoice) {
    var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var result = '';

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

    document.getElementById('result').innerHTML = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}

function loseLife() {
    life = life -1;
    if (life <1 ) {
        result = `You lose try again? return to menu`;
} 


// Modal functions
function openModal() {
    document.getElementById('rulesModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('rulesModal').style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    var modal = document.getElementById('rulesModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};