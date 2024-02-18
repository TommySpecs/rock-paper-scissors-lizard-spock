//Icons used in Game
let icons = {
    "rock": "<i class=\"fa-regular fa-hand-back-fist\"></i>",
    "paper": "<i class=\"fa-regular fa-hand\"></i>",
    "scissors": "<i class=\"fa-regular fa-hand-scissors\" ></i >",
    "lizard": "<i class=\"fa-regular fa-hand-lizard\"></i>",
    "spock": "<i class=\"fa-regular fa-hand-spock\"></i>"
};

//Menu Modal
let difficulty = '';
let closeMenuEasy= document.querySelectorAll(".easy");
let closeMenuHard = document.querySelectorAll(".hard");

/**
* Start Game Easy Mode
* The Easy Button stops displaying the Menu Modal
* If opened through Lives Modal-closes Lives Modal
* Sets Difficulty to Easy
* Takes User to the Game screen
* Stops Displaying the Lizard and spock buttons
*/

closeMenuEasy.forEach(btn => {
    btn.addEventListener("click", function (e) {
        lives = document.getElementById('lives').valueAsNumber;
        document.getElementById('life-display-player').textContent = lives;
        document.getElementById('life-display-pc').textContent = lives;   
        document.getElementById('Game').style.display = 'block';
        document.getElementById('menu-modal').style.display = 'none';
        document.getElementById('lives-modal').style.display = 'none';
        difficulty= 'Easy';
        document.getElementById('lizard').style.display = 'none';
        document.getElementById('spock').style.display = 'none';        
    });
});

/**
* Start Game Hard Mode
* The Hard Button stops displaying the Menu Modal
* If opened through Lives Modal-closes Lives Modal
* Sets Difficulty to Hard
* Takes User to the Game screen
* Displays all available Player choices
*/
closeMenuHard.forEach(btn => {
    btn.addEventListener("click", function (e) {
        lives = document.getElementById('lives').valueAsNumber;
        document.getElementById('life-display-player').textContent = lives;
        document.getElementById('life-display-pc').textContent = lives;   
        document.getElementById('Game').style.display = 'block';
        document.getElementById('menu-modal').style.display = 'none';
        document.getElementById('lives-modal').style.display = 'none';
        difficulty= 'Hard';      
        document.getElementById('lizard').style.display = 'block';
        document.getElementById('spock').style.display = 'block';       
    });
});

// Rules Modal 
let openRulesModal = document.querySelectorAll(".rules-btn");
let closeRulesModal = document.querySelectorAll(".close");

/**
* Open Rules Modal
* The Rules Button Opens the Rules Modal over the current screen
*/
openRulesModal.forEach(btn => {
    btn.addEventListener("click", function (e) {     
        document.getElementById('rules-modal').style.display = 'block';
    });
});
/**
* Cross on the Rules Modal
* The cross closes the Rules Modal and returns User to original screen they were on before opening the rules modal
*/
closeRulesModal.forEach(span => {
    span.addEventListener("click", function (e) {
        document.getElementById('rules-modal').style.display = 'none'; 
    });
});

//lives
let lives = 3;
document.getElementById('life-display-player').textContent = lives;
document.getElementById('life-display-pc').textContent = lives;  
let openLivesModal = document.querySelectorAll(".lives-btn");
/**
* Open Lives Modal
* The Lives Button Opens the Rules Modal over the current screen
*/
openLivesModal.forEach(btn => {
    btn.addEventListener("click", function (e) {
    document.getElementById('lives-modal').style.display = 'block';
    });
});

/**
*Lives value display
*This displays the number of lives chosen by the User
*/
const Lives = document.querySelector("#life-count");
const input = document.querySelector("#lives");
Lives.textContent = input.value;
input.addEventListener("input", (event) => {
  Lives.textContent = event.target.value;
});

//play game
let choiceBtns= document.querySelectorAll(".circle-button");

/**
*Player choice Selection buttons
*These are the choices the User can pick from
*Choosing from any of these buttons will start the play game function
*/
choiceBtns.forEach(btn=>{
    btn.addEventListener("click", function(e) {
        playGame(this.value);
    });
});
/**
*PlayGame Function
*checks which difficulty has been selected
*computer will randomly select from the available choices of the chosen difficulty
*/

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
/**
* The function will look at the player choice and check it against the computer choice
*/

    if (playerChoice === computerChoice) {
        result = 'It\'s a tie!';
        document.getElementById('final-result').style.color='black';
    } else if (
        (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
        (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
        (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
        (playerChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
        (playerChoice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock'))
    ) {
/**
* A result is determined a Tie results in no change to the lives
* If Computer wins the Player loses a life
* If the Player wins the computer loses a life
*/
        result = 'You win!';
        document.getElementById('life-display-pc').textContent = document.getElementById('life-display-pc').textContent - 1;
        document.getElementById('final-result').style.color='green'; 
       
    } else {
        result = 'You lose!';
        document.getElementById('life-display-player').textContent = document.getElementById('life-display-player').textContent - 1;
        document.getElementById('final-result').style.color='red';  
    }
/**
* Result display
* This shows the User their choice vs the Computer choice and the outcome of their choice
*/
       document.getElementById('result').innerHTML = `You chose ${icons[playerChoice]}, computer chose ${icons[computerChoice]}.`;
       document.getElementById('final-result').innerHTML = `${result}`;
      
/**
* Game Over Nodal
* This part of the function keeps track of the number of lives left
* If Player lives drop below 1 then the game ends and the YOU LOSE message is given
* If Computer lives drop below 1 then the game ends and the YOU WIN message is given 
*/
    if (document.getElementById('life-display-player').textContent < 1){
        document.getElementById('game-over-modal').style.display = 'block';
        document.getElementById('game-over-result').innerHTML = 'YOU LOSE!';
        document.getElementById('game-over-result').style.color='red';
        document.getElementById('game-over-message').innerHTML = 'Better Luck Next Time!, Want to try again?';
    }
    else if (document.getElementById('life-display-pc').textContent < 1){
        document.getElementById('game-over-modal').style.display = 'block';
        document.getElementById('game-over-result').innerHTML = 'YOU WIN!';
        document.getElementById('game-over-result').style.color='green';
        document.getElementById('game-over-message').innerHTML = 'Congratulations!, Want to play again? ';
    }
 }
 
let openMenu = document.querySelectorAll(".rtn-btn");
/**
*Return to Menu Button
*Brings the User back to the Menu Modal
*Stops the display of the game over and Lives Modals
*stops displaying the game screen
*resets the lives back to the number selected on the slider
*/
openMenu.forEach(btn => {
    btn.addEventListener("click", function (e) {
        document.getElementById('menu-modal').style.display = 'block';
        document.getElementById('Game').style.display = 'none';
        document.getElementById('lives-modal').style.display = 'none';
        document.getElementById('game-over-modal').style.display = 'none';
        document.getElementById('life-display-player').textContent = lives;
        document.getElementById('life-display-pc').textContent = lives; 
    });
});
