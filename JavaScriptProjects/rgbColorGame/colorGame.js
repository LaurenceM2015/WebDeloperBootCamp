
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

colorDisplay.textContent = pickedColor;

// Loop into the div with the class of sqaure.
for(let i = 0; i < squares.length; i++){

    // Add initial color to div with the class of sqaure.
    squares[i].style.background = colors[i];
    

    // Add click listener to div with the class of sqaure.
    squares[i].addEventListener("click", function() {
        // Grad color of clicked square
        let clickedColor = this.style.background;
        
        // Compare color to pickedColor
       
        if(clickedColor === pickedColor) {
			alert("Correct!");
		} else {
			alert("WRONG!!!");
		}

    });

}