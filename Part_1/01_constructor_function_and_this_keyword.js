// Constructor and "this" keyword

// We can create a constructor function in javascript by 
// in this example we will simply 3 parameters for the constructor function
// the this keyword isn't referenced to the constructor function
// but instead, it is reference to the newly created instance of the User object
// when we call "new User" to create such object
function User(name, age, gender) {
	this.name = name
	this.age = age
	this.gender = gender
}

// lets create a new object name user1 and pass three parameters
// the order of the data depends on how you configured your constructor function 
const user1 = new User('Mike', 19, 'male')
console.log(user1)