
//let colors = [
/*
let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
];

*/

let colors = generateRandomColors(6);


// Select all the square
let squares = document.querySelectorAll(".square");

// picked the 4 sqaure
let pickedColor = pickColor();
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
    return "rgb(" + r + "," + g + "," + b + ")";

}

