
//let colors = [
let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
];


// Select all the square
let squares = document.querySelectorAll(".square");

// picked the 4 sqaure
let pickedColor = colors[3];
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

// Loop into the div with the class of sqaure.
for(let i = 0; i < squares.length; i++){

    // Add initial color to div with the class of sqaure.
    squares[i].style.background = colors[i];
    

    // Add click listener to div with the class of sqaure.
    squares[i].addEventListener("click", function() {
        // Grad color of clicked square
        let clickedColor = this.style.backgroundColor;
        
        // Compare color to pickedColor
       
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "It Correct, Well Done";
            changeColors(clickedColor);
		} else {
            this.style.backgroundColor = "#343a40";
            messageDisplay.textContent = "Sorry Try Again";
		}

    });

};

/* Change header color and all the square */
function changeColors(color) {
    // Loop through all squares
    for(let i = 0; i < squares.length; i++){
        // change each color to match give color
        squares[i].style.backgroundColor = color;
    }
    
}



/* SCORE KEEPER */

// Player One
let p1Display = document.querySelector('#p1Display');
let p1Button = document.querySelector('#p1');
let p1Score = 0;

// Player Two
let p2Display = document.querySelector('#p2Display');
let p2Button = document.getElementById('p2');
let p2Score = 0;

// Game changing state
let resetButton = document.getElementById("reset");
let gameOver = false;
let winningScore = 5;

// Game input 
let numInput = document.querySelector("input[type='number']");
let winningScoreDisplay = document.querySelector("p span");


p1Button.addEventListener("click", function(){
    // To add 1 to p1Score
    if(!gameOver){
        p1Score++;
        console.log(p1Score, winningScore);
        if(p1Score === winningScore){
          p1Display.classList.add('winner');
          gameOver = true;   
        }
        p1Display.textContent = p1Score;
    } 
});

p2Button.addEventListener("click", function(){
    // To add 1 to p1Score
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
          p2Display.classList.add('winner');
          gameOver = true;   
        }
        p2Display.textContent = p2Score;
    } 
});

resetButton.addEventListener('click', function(){
  reset();
});

// Reset Function 
function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;

    p1Display.classList.remove('winner');
    p2Display.classList.remove('winner');

    // Reset game
    gameOver = false;
}

// Input event listener 
numInput.addEventListener('change', function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();

})