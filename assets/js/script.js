
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
let closeMenuEasy= document.querySelectorAll(".easy")
let closeMenuHard = document.querySelectorAll(".hard")

/**
 * Start Game Easy Mode
 * The Easy Button stops displaying the Menu Modal
 * Sets Difficulty to Easy
 * Takes User to the Game screen
 * Stops Displaying the Lizard and spock buttons
 */
closeMenuEasy.forEach(btn => {
    btn.addEventListener("click", function (e) {
        document.getElementById('Game').style.display = 'block';
        document.getElementById('menuModal').style.display = 'none';
        difficulty= 'Easy';
        document.getElementById('lizard').style.display = 'none';
        document.getElementById('spock').style.display = 'none';
    });
});

/**
 * Start Game Hard Mode
 * The Hard Button stops displaying the Menu Modal
 * Sets Difficulty to Hard
 * Takes User to the Game screen
 * Displays all available Player choices
 */
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
let openRulesModal = document.querySelectorAll(".rulesBtn");
let closeRuleseModal = document.querySelectorAll(".close");

/**
 * Open Rules Modal
 * The Rules Button Opens the Rules Modal over the current screen
 */
openRulesModal.forEach(btn => {
    btn.addEventListener("click", function (e) {     
        document.getElementById('rulesModal').style.display = 'block';
    });
});
/**
 * Cross on the Rules Modal
 * The cross closes the Rules Modal and returns User to original screen they were on before opening the rules modal
 */
closeRuleseModal.forEach(span => {
    span.addEventListener("click", function (e) {
        document.getElementById('rulesModal').style.display = 'none'; 
    });
});

//lives
let lives = 3;
document.getElementById('lifeDisplayPlayer').textContent = lives;
document.getElementById('lifeDisplayPc').textContent = lives;  
let openLivesModal = document.querySelectorAll(".livesBtn");
let closeLivesEasy= document.querySelectorAll(".easyLives")
let closeLivesHard = document.querySelectorAll(".hardLives")
/**
 * Open Lives Modal
 * The Lives Button Opens the Rules Modal over the current screen
 */
openLivesModal.forEach(btn => {
    btn.addEventListener("click", function (e) {
    document.getElementById('livesModal').style.display = 'block';
    });
});

/**
 *Lives value display
 *This displays the number of lives chosen by the User
 */
const Lives = document.querySelector("#lifeCount");
const input = document.querySelector("#lives");
Lives.textContent = input.value;
input.addEventListener("input", (event) => {
  Lives.textContent = event.target.value;
});

/**
 *Easy Button-Lives Modal
 *The Easy Button stops displaying the Lives and Menu Modal
 *Set the lives selected by the slider
 *Sets Difficulty to Easy
 *Takes User to the Game screen 
 *Stops Displaying the Lizard and spock buttons
 */

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

   /**  let heartsLeft = input;
    for(let i=0; i< heartsLeft; i++){
    hearts.innerhtml += '<i class="fa-solid fa-heart" style="color: #ff0000;"></i>';
}*/
});
/**
 *Hard Button-Lives Modal
 *The Hard Button stops displaying the Lives and Menu Modal
 *Set the lives selected by the slider
 *Sets Difficulty to Hard
 *Takes User to the Game screen 
 *Displays all available Player choices
 */
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
 *PlayeGame Function
 *checks which difficulty has been selceted
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
        document.getElementById('lifeDisplayPc').textContent = document.getElementById('lifeDisplayPc').textContent - 1;   
       
    } else {
        result = 'You lose!';
        document.getElementById('lifeDisplayPlayer').textContent = document.getElementById('lifeDisplayPlayer').textContent - 1;
    }
/**
 * Result display
 * This shows the User their choice vs the Computer choice and the outcome of their choice
 */
       document.getElementById('result').innerHTML = `You chose ${icons[playerChoice]}, computer chose ${icons[computerChoice]}. ${result}`;
     
/**
 * Game Over Nodal
 * This part of the function keeps track of the number of lives left
 * If Player lives drop below 1 then the game ends and the YOU LOSE message is given
 * If Computer lives drop below 1 then the game ends and the YOU WIN message is given 
 */
    if (document.getElementById('lifeDisplayPlayer').textContent < 1){
        document.getElementById('gameOverModal').style.display = 'block',
        document.getElementById('gameOverResult').innerHTML = 'YOU LOSE!';
        document.getElementById('gameOverResult').style.color='red';
        document.getElementById('gOMessage').innerHTML = 'Better Luck Next Time!, Want to try again?';
    }
    else if (document.getElementById('lifeDisplayPc').textContent < 1){
        document.getElementById('gameOverModal').style.display = 'block',
        document.getElementById('gameOverResult').innerHTML = 'YOU WIN!';
        document.getElementById('gameOverResult').style.color='green';
        document.getElementById('gOMessage').innerHTML = 'Congratulations!, Want to play again? ';
    };
 }
 

let openMenu = document.querySelectorAll(".rtnBtn");
/**
 *Return to Menu Button
 *Brings the User back to the Menu Modal
 *Stops the display of the Gameover and Lives Modals
 *stops displaying the game screen
 *resets the lives back to the number selcted on the slider
 */
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
