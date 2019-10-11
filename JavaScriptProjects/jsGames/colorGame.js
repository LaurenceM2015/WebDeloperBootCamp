
//let colors = [
let numSquares = 6;
// Generate Randome color of 6
let colors = generateRandomColors(numSquares);

// Select all the square
let squares = document.querySelectorAll(".square");

// picked the 4 sqaure
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let colorHeading = document.querySelector('#colGamHeading');
//let resetButton = document.querySelector("#reset");
let colorResetButton = document.querySelector('#reset');
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");



easyBtn.addEventListener("click", function() {
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    numSquares = 3
    // Generate all new colors
    colors = generateRandomColors(numSquares);
    // Pick a new random color from array
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    numSquares = 6;
    // Generate all new colors
    colors = generateRandomColors(numSquares);
    // Pick a new random color from array
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
       
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = 'block';
       
    }
    
});


colorResetButton.addEventListener("click", function(){
    
    // Generate all new colors
    colors = generateRandomColors(numSquares);
    // Pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of sqaures
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    colorHeading.style.backgroundColor = "#343a40";
})


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
            colorResetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            colorHeading.style.backgroundColor = clickedColor;

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

// Function Picked color
function pickColor () {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// Generate Random color 
function generateRandomColors(num) {
   // make a array
   let arr = []
   // Repeat num times
   for(let i = 0; i < num; i++){
        arr.push(randomColor())
        // Get random color and push into array
   }
   // Return that array
   return arr;
}

function randomColor(){
    // Pick a 'red' from 0 -255
   let r = Math.floor(Math.random() * 256);
    // Pick a 'green' from 0 -255
    let g = Math.floor(Math.random() * 256);
    // Pick a 'blue' from 0 -255
    let b = Math.floor(Math.random() * 256);
    // return rgb color string
    return "rgb(" + r + ", " + g + ", " + b + ")";

}

