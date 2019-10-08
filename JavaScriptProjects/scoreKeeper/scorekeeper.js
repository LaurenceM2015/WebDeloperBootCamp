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


p1Button.addEventListener("click", function(){
    // To add 1 to p1Score
    if(!gameOver){
        p1Score++;
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
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;

    p1Display.classList.remove('winner');
    p2Display.classList.remove('winner');

    // Reset game
    gameOver = false;
    
})