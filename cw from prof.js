// Basics of JavaScript

/*
    This a multi-line comment
    HELLLLLLLOOOOOOO
*/

/* 
    Primitive data types: strings, integers, boolean, float, arrays (python list), objects (similar to BUT NOT EXACTLY LIKE python dictionaries)
    
    JavaScript is weakly typed like Python

    JavaScript Casing Convention:
    In python we use snake casing, this_is_a_variable
    JavaScript uses Camel Casing, thisIsAVariable
*/

/* Variable declaration, is when we initially create a variable and some space in our application's memory for that variables value */
var helloWorld;

/* Variable assignment, is assigning a value to a declared variable */
helloWorld = 'Hello World.';

var helloWorld2 = 'Hello world 2';

helloWorld2 = 'Hello again';

// print() in python
console.log(helloWorld);

/* 
new_var = 'Value'
*/
var newVar = 'Value'
let newVar2 = 'Value2'
const newVar3 = 'Value3'

// Can't do this, because newVar3 is constant:
// newVar3 = 'NEW VALUE'

// Declaring and assigning an integer
let favoriteNumber = 10

// Declaring and assigning a float
let myFloat = 10.5

console.log(favoriteNumber, myFloat)

/* 
* ARRAYS
*/

// Declaring and assigning an array
let myNums = [9,5,19,4]

console.log(myNums)

// Index to get the 2nd item in myNums and log it
console.log(myNums[1])

// Update the value at an index
myNums[1] = 10

console.log(myNums)

/* 
* OBJECTS
*/
const myPerson = {
    firstName: 'Dylan',
    lastName: 'Smith',
    address: '123 Main St',
    city: 'Candyland'
}

const cart = {
    apple: 2,
    banana: 3,
    lime: 4,
    // itemToDisplay: 'HELLO'
}

// Can't do this:
/* myPerson = {
    firstName: 'Dylan',
    lastName: 'Smith',
    address: '123 Main St',
    city: 'Candyland'
} */

console.log(myPerson)

/* Accessing a key */

// Dot notation
console.log(myPerson.firstName)

// Index notation/Square bracket notation
console.log(myPerson['lastName'])

/* Updating a key's value */
myPerson.firstName = 'Nalyd'

console.log(myPerson)

// Why use one over the other?
let itemToDisplay = 'apple'

// console.log(cart.itemToDisplay)
console.log(cart[itemToDisplay])

/* 
* CONDITIONALS
*/

let myName = 'Allen'

// Print out 'HELLO LUCAS' if myName is 'Lucas', print 'Hey Dylan' if myName is 'Dylan', otherwise print 'I don't know who you are'
if (myName == 'Lucas') {
    console.log('Hello Lucas')    
} else if (myName == 'Dylan') {
    console.log('Hey Dylan')
} else {
    console.log("I don't know who you are.")
}

/* 
* FUNCTIONS
*/

// In javascript, there are a couple of different ways to create a function

// Equivalent of "def":
function firstFunction(param1) {
    return param1
}

const newFunc = function(param1) {
    return param1
}

// Equivalent of a lambda or an "anonymous function"
// Arrow functions!
const arrowFunc = (param1) => {
    return param1
}

console.log(firstFunction('Hello'))
newFunc('Hello')
arrowFunc('Hello')

/* 
* FOR LOOPS
*/

/* There are 3 main types of for loops */

let myLoopNums = [1,50,10,5]

// Traditional For Loop
// 
for (let i = 0; i < myLoopNums.length; i++) {
    console.log(myLoopNums[i])
}

// for ... of loop
// Equivalent to, in python: for curr_num in my_loop_nums:
for (let currNum of myLoopNums) {
    console.log(currNum)
}

// for ... in loop
for (let currKey in myLoopNums) {
    console.log(currKey)
}

for (let currKey in myPerson) {
    console.log(currKey, myPerson[currKey])
}

/* 
* Formatted strings/Template literals/Template Strings
*/
let animal = 'Penguin'

// Print a string that says, "Your favorite animal is: NAME"
console.log('Your favorite animal is: ' + animal)

// f''
console.log(`Your favorite animal is: ${animal}`)


