// 1: Start by creating an empty menu object.
const menu = {
    // 2: Add a _courses property to your menu object and set 
      _courses: {
        appetizers: [],
            mains: [],
        desserts: []
      }, 
    // 4: set getter and setter for the appetizers, mains, and desserts properties.
    get appetizers() { 
      return this._courses.appetizers;
    },
     set appetizers(appetizersData) {
       this._courses.appetizers = appetizerData;
    },
    get mains() {
       return this._courses.mains;
    },
     set mains(mainsData) {
       this._courses.mains = mainsData;
    },
    get desserts() {
      return this._courses.desserts
    },
     set desserts(dessertsData) {
       this._courses.desserts = dessertsData;
    },
    // 5 Inside your menu object, create an empty getter method for the _courses property.
    get  courses() {
    // 6: Inside the courses getter method, return an object that contains key/value pairs for appetizers, mains, and desserts.
          return {appetizers: this.appetizers, 
              mains: this.mains, 
              desserts: this.desserts,
    };
    
    },
    
    // 7: The method should take in three parameters: the courseName, the dishName , and the dishPrice.
    addDishToCourse(courseName, dishName, dishPrice) {
      
      // 8: The .addDishToCourse() method should create an object called dish which has a name and price which it gets from the parameters.
      
          const dish = {
        name: dishName,
          price: dishPrice
      };
    // 9: Create a method inside the menu object called .getRandomDishFromCourse(). It will take in one parameter which is the courseName.
      return this._courses[courseName].push(dish); 
    },
    
    // 10 There are a few steps in getting the .getRandomDishFromCourse() to work.
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
     
      const randomIndex = Math.floor(Math.random() * dishes.length);
          return dishes[randomIndex];
    },
    // 11: Now that we have a way to get a random dish from a course, we can create a .generateRandomMeal() function which will automatically generate a three-course meal for us.
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers'); 
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts'); 
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, and The price is £${totalPrice}.`;
      
    }
    
  };
  // 12.Now that we’ve finished our menu, object, let’s use it to create a menu by adding some appetizers, mains, and desserts with the .addDishToCourse() function. Add at least 3 dishes to each course (or more if you like!).
  menu.addDishToCourse('appetizers', 'prawn cocktail', 5.70);
  menu.addDishToCourse('appetizers', 'Caesar Salad', 3.25);
  menu.addDishToCourse('appetizers', 'Salad', 5.70);
  
  menu.addDishToCourse('mains', 'Steak', 11.70);
  menu.addDishToCourse('mains', 'Chicken Breast', 10.25);
  menu.addDishToCourse('mains', 'Pork leg', 12.70);
  
  menu.addDishToCourse('desserts', 'Ice Cream', 3.70);
  menu.addDishToCourse('desserts', 'Waffle', 5.25);
  menu.addDishToCourse('desserts', 'Cheese Cake', 4.70);
  
  // 13 Once your menu has items inside it, generate a meal by using the .generateRandomMeal() function on your menu, and save it to a variable called meal.
  let meal = menu.generateRandomMeal();
  console.log(meal);