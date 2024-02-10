let difficulty = 'Hard';

let icons = {
    "rock": "<i class=\"fa-regular fa-hand-back-fist\"></i>",
    "paper": "<i class=\"fa-regular fa-hand\"></i>",
    "scissors": "<i class=\"fa-regular fa-hand-scissors\" ></i >",
    "lizard": "<i class=\"fa-regular fa-hand-lizard\"></i>",
    "spock": "<i class=\"fa-regular fa-hand-spock\"></i>"
}

//Menu Modal
let closeMenuEasy= document.querySelectorAll(".easy")
let closeMenuHard = document.querySelectorAll(".hard")

closeMenuEasy.forEach(btn => {
    btn.addEventListener("click", function (e) {
        document.getElementById('menuModal').style.display = 'none';
        difficulty= 'Easy';
        document.getElementById('lizard').style.display = 'none';
        document.getElementById('spock').style.display = 'none';
    });
});

closeMenuHard.forEach(btn => {
    btn.addEventListener("click", function (e) {
        document.getElementById('menuModal').style.display = 'none';
        difficulty= 'Hard' 
        document.getElementById('lizard').style.display = 'block';
        document.getElementById('spock').style.display = 'block';       
    });
});

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

let choiceBtns= document.querySelectorAll(".circle-button");

choiceBtns.forEach(btn=>{
    btn.addEventListener("click", function(e) {
        playGame(this.value);
    });
});


function playGame(playerChoice) {
    let choices = [];

    if(difficulty==='Easy') {
     choices = ['rock', 'paper', 'scissors'];
    }
    else{
     choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    }
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

       document.getElementById('result').innerHTML = `You chose ${icons[playerChoice]}, computer chose ${icons[computerChoice]}. ${result}`;
}

let openMenu = document.querySelectorAll(".rtnBtn");

openMenu.forEach(btn => {
    btn.addEventListener("click", function (e) {
        document.getElementById('menuModal').style.display = 'block';
    });
});
