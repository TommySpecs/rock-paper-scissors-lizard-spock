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

//Modal Section//
// Get the modal
var modal = document.getElementById("rulesModal");

// Get the button that opens the modal
var btn = document.getElementById("rules-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};