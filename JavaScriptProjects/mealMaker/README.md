<h1>Meal Maker</h1>

<p>In this project, I am gone use JavaScript to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!</p>

<ol>
    <li>Start by creating an empty menu object.</li>
    <li>Add a _courses property to your menu object and set its value to an empty object. This property will ultimately contain a mapping between each course and the dishes available to order in that course.</li>
     <li>Create three properties inside the _courses object called appetizers, mains, and desserts. Each one of these should initialize to an empty array.</li>
    <li>Create getter and setter methods for the appetizers, mains, and desserts properties.</li>
    <li>
    Inside the courses getter method, return an object that contains key/value pairs for appetizers, mains, and desserts.
    </li>
     <li>
        Inside the menu object, we are going to create a method called .addDishToCourse() which will be used to add a new dish to the specified course on the menu.
        The method should take in three parameters: the courseName, the dishName , and the dishPrice.
    </li>
     <li>
    The .addDishToCourse() method should create an object called dish which has a name and price which it gets from the parameters.
    </li>
    <li>
    Now, we’re going to need another function which will allow us to get a random dish from a course on the menu, which will be necessary for generating a random meal.
    </li>
    <li>Create a method inside the menu object called .getRandomDishFromCourse(). It will take in one parameter which is the courseName.</li>
    <li>
    Retrieve the array of the given course’s dishes from the menu‘s _courses object and store in a variable called dishes.
    </li>
     <li>
        Now that we have a way to get a random dish from a course, we can create a .generateRandomMeal() function which will automatically generate a three-course meal for us. The function doesn’t need to take any parameters.
     </li>
     <li>
        Now that we’ve finished our menu, object, let’s use it to create a menu by adding some appetizers, mains, and desserts with the .addDishToCourse() function. Add at least 3 dishes to each course (or more if you like!).
    </li>
    <li>
    Once your menu has items inside it, generate a meal by using the .generateRandomMeal() function on your menu, and save it to a variable called meal. Lastly, print out your meal variable to see what meal was generated for you.
    </li>
    

</ol>


