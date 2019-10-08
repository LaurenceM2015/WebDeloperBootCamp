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

});

