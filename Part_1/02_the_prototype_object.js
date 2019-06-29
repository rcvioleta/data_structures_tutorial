// The prototype object
// multiple objects can refer to 

function User(full_name, age, gender) {
	this.full_name = full_name
	this.age = age
	this.gender = gender
}

const user1 = new User('Mikey Garcia', 28, 'male')
const user2 = new User('Cynthia Luster', 25, 'female')

// we'll add a new property for all instance of our object and for this 
// example we will assign 'Web Developer' as a default value
// now, all instance of the User object has access to it
User.prototype.work = 'Web Developer'

// same goes with functions/methods
// every instance has access to it via dunder proto
// i used to think of prototypes as a wifi modem
// you see, there are many phones out there (they could represent as our user object, assumming they have same specs)
// and there is out wifi modem that allows our phones to have access to (in our example each of the User object's intances)
User.prototype.introduce = function () {
	return `Hi, I am ${this.full_name} and I work as a ${this.work}`
}

console.log(user1.introduce())