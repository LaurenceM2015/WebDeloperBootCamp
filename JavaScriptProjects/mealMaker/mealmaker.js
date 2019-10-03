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
              desserts: this.desserts}
    }, 
    
    // 7: The method should take in three parameters: the courseName, the dishName , and the dishPrice.
    addDishToCourse(courSeName, dishName, dishPrice) {
      
      // 8: The .addDishToCourse() method should create an object called dish which has a name and price which it gets from the parameters.
      
          const dish = {
        name: dishName,
          price: dishPrice
      }
      return this._courses[courseName].push(dish); 
    }
  }
