// Creating an empty arrays.
var todos = ["Buy New Turtle"];
 // Ask for new input
 var input = prompt("What would you like to do?");

// Todos while loop
while(input !== "quit"){
    // List all the todo tasks
    if(input === "list") {
        console.log("***********");
        // forEach
        todos.forEach(function(todo, i){
            console.log(i + ": " + todo);
        });
        console.log("***********");
       
    } else if (input === "new") {
        // Ask for new todo
        var newTodo = prompt("Enter New Todo");
        // add to todos array
        todos.push(newTodo);
        console.log("Added Todo");

    } else if(input === "delete"){
        // ask for index of todo to be deleted
        var index = prompt("Please enter index of todo to delete");
        // delete that todo
        //splice()
        todos.splice(index,1);
        console.log("Delete Todo" + index + " " );
    }
    // Ask again for new input
    var input = prompt("What would you like to do ?");
}
console.log("ok, You Quit The App");

