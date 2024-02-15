let difficulty = 'Hard';
let lives = 3;
document.getElementById('lifeDisplayPlayer').textContent = lives;
document.getElementById('lifeDisplayPc').textContent = lives;  

let icons = {
    "rock": "<i class=\"fa-regular fa-hand-back-fist\"></i>",
    "paper": "<i class=\"fa-regular fa-hand\"></i>",
    "scissors": "<i class=\"fa-regular fa-hand-scissors\" ></i >",
    "lizard": "<i class=\"fa-regular fa-hand-lizard\"></i>",
    "spock": "<i class=\"fa-regular fa-hand-spock\"></i>"
};

//Menu Modal
let closeMenuEasy= document.querySelectorAll(".easy")
let closeMenuHard = document.querySelectorAll(".hard")

closeMenuEasy.forEach(btn => {
    btn.addEventListener("click", function (e) {
        document.getElementById('Game').style.display = 'block';
        document.getElementById('menuModal').style.display = 'none';
        difficulty= 'Easy';
        document.getElementById('lizard').style.display = 'none';
        document.getElementById('spock').style.display = 'none';
    });
});

closeMenuHard.forEach(btn => {
    btn.addEventListener("click", function (e) {
        document.getElementById('Game').style.display = 'block';
        document.getElementById('menuModal').style.display = 'none';
        difficulty= 'Hard'      
        document.getElementById('lizard').style.display = 'block';
        document.getElementById('spock').style.display = 'block';       
    });
});

// Rules Modal 
let openRulesMenuModal = document.querySelectorAll(".rulesBtnMenu");
let openRulesModal = document.querySelectorAll(".rulesBtn");
let closeRuleseModal = document.querySelectorAll(".close");

openRulesMenuModal.forEach(btn => {
    btn.addEventListener("click", function (e) {
        document.getElementById('menuModal').style.display = 'none';
        document.getElementById('rulesModal').style.display = 'block';       
    });
});

openRulesModal.forEach(btn => {
    btn.addEventListener("click", function (e) {
        document.getElementById('menuModal').style.display = 'none';
        document.getElementById('rulesModal').style.display = 'block';
    });
});

closeRuleseModal.forEach(span => {
    span.addEventListener("click", function (e) {
        document.getElementById('rulesModal').style.display = 'none';
        document.getElementById('menuModal').style.display = 'block';
    });
});

//lives
let openLivesModal = document.querySelectorAll(".livesBtn");
let closeLivesEasy= document.querySelectorAll(".easyLives")
let closeLivesHard = document.querySelectorAll(".hardLives")


openLivesModal.forEach(btn => {
    btn.addEventListener("click", function (e) {
    document.getElementById('livesModal').style.display = 'block';
    });
});

const Lives = document.querySelector("#lifeCount");
const input = document.querySelector("#lives");
Lives.textContent = input.value;
input.addEventListener("input", (event) => {
  Lives.textContent = event.target.value;
});

closeLivesEasy.forEach(btn => {
    btn.addEventListener("click", function (e) {
        lives = document.getElementById('lives').valueAsNumber;
        document.getElementById('lifeDisplayPlayer').textContent = lives;
        document.getElementById('lifeDisplayPc').textContent = lives;   
        document.getElementById('Game').style.display = 'block';
        document.getElementById('menuModal').style.display = 'none';
        document.getElementById('livesModal').style.display = 'none';
        difficulty= 'Easy';
        document.getElementById('lizard').style.display = 'none';
        document.getElementById('spock').style.display = 'none';
    });
});

closeLivesHard.forEach(btn => {
    btn.addEventListener("click", function (e) {
        lives = document.getElementById('lives').valueAsNumber;
        document.getElementById('lifeDisplayPlayer').textContent = lives;
        document.getElementById('lifeDisplayPc').textContent = lives;   
        document.getElementById('Game').style.display = 'block';
        document.getElementById('menuModal').style.display = 'none';
        document.getElementById('livesModal').style.display = 'none';
        difficulty= 'Hard'      
        document.getElementById('lizard').style.display = 'block';
        document.getElementById('spock').style.display = 'block';       
    });
});


//play game
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
        document.getElementById('lifeDisplayPc').textContent = document.getElementById('lifeDisplayPc').textContent - 1;   
       
    } else {
        result = 'You lose!';
        document.getElementById('lifeDisplayPlayer').textContent = document.getElementById('lifeDisplayPlayer').textContent - 1;
    }

       document.getElementById('result').innerHTML = `You chose ${icons[playerChoice]}, computer chose ${icons[computerChoice]}. ${result}`;

    if (document.getElementById('lifeDisplayPlayer').textContent < 1){
        document.getElementById('gameOverModal').style.display = 'block',
        document.getElementById('gameOverResult').innerHTML = 'You Lose!';
    }
    else if (document.getElementById('lifeDisplayPc').textContent < 1){
        document.getElementById('gameOverModal').style.display = 'block',
        document.getElementById('gameOverResult').innerHTML = 'You Win!';
    };
 }

let openMenu = document.querySelectorAll(".rtnBtn");

openMenu.forEach(btn => {
    btn.addEventListener("click", function (e) {
        document.getElementById('menuModal').style.display = 'block';
        document.getElementById('Game').style.display = 'none';
        document.getElementById('livesModal').style.display = 'none';
        document.getElementById('gameOverModal').style.display = 'none';
        document.getElementById('lifeDisplayPlayer').textContent = lives;
        document.getElementById('lifeDisplayPc').textContent = lives; 
    });
});
