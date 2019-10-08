// Player One
let p1Display = document.querySelector('#p1Display');
let p1Button = document.querySelector('#p1');
let p1Score = 0;

// Player Two
let p2Display = document.querySelector('#p2Display');
let p2Button = document.getElementById('p2');
let p2Score = 0;


p1Button.addEventListener("click", function(){
    // To add 1 to p1Score
    p1Score++;
    console.log(p1Score);
    p1Display.textContent = p1Score;
});

p2Button.addEventListener("click", function(){
    // To add 1 to p1Score
    p2Score++;
    console.log(p2Score);
    p2Display.textContent = p2Score;
});
