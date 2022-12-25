//  you run java script by typing node  then file name 

// basics of Java Script






/*
multi line comments  press """ """
*/






/*
primitive data types: strings, integers, boolean, float, arrays(python list), objects(simlar to BUT NOT EXACTLY LIKE python dictionaries)

JavaScript is weekly typed like Python

Javescript Casing Conventions
in python we use snake casing, this_is_a_variable
Javascript usesCamel Casing, thisIsAVariable
*/






/* Variable decleration, is when we initally creat a variable and some space in our appl,ication's memory for that variables value */
var helloWorld;






/* Variable assignment, is assigning a value to a declared variable */
helloWorld = 'Hello World.';

// Everything in one sweep
var helloWorld2 = 'Hello world 2 ';

// redeclare
helloWorld2 = 'Hello again';

//print() in python
console.log(helloWorld);






/*
new_var = 'Value'
*/

var newVar = 'Value'
let newVar2 = 'Value2'

// you cannot reassign constant variable
const newVar3 = 'Value3'

// Declaring and assigning an integer
let favoriteNumber = 10

// Declaring and assigning a float
let myFloat = 10.5

console.log(favoriteNumber, myFloat)







/*
 ARRAY
*/

// Declaring and assigning an array
let myNums = [9,5,19,4]

// .pop()--Removes from the end of an array
myNums.pop()

// in java .push()-- adds to the end of an array
myNums.push(7)

// .shift()-- Remove from the beginning of an array
myNums.shift()

// .unshift()-- Adds to the beginning of an array
myNums.unshift(16)

// .includes()

// if 10 in my_nums--
if(myNums.includes(10)){
    console.log('10 is there')
}

// .index()--find the index of an array
console.log(myNums.indexOf())

// negative indexing-- this version may not be supported
console.log(myNums.at(-1)) 

//this version is the fall back version
console.log(myNums[-1])
console.log(myFloat)
console.log(myNums)

//index to get the 2nd item in myNums and log it
console.log(myNums[1])
console.log(myNums[myNums.length -2])

// update the value at an index
myNums[1]= 10

console.log(myNums)

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
]

// slicing
console.log(months.slice(1,4))

// splicing-- 
// first---index of item.      
// second---how many items deleted. 
// third--- item or value your inserting

// create brand new month and put it between jun and jul
months.splice(6, 0, 'min'  )
console.log(months)

months.splice(0, 1, 'lom'  )
console.log(months)

// Reverse--.reverse()
console.log(months.reverse())

// Sort--.sort()
// alphabetical--but it treats everything as a string, even an integer
months.sort()

// if you want to make sure the types and the values are the same you have to use ===
1===1  

let unsortedNums = [2, 1, 3 ,5 ,6 ,7 ,8 ,9 ,10 ,20]

// we need to return a value to tell  java script weather or not to swap our variables
// sort is expecting interger values to tell java script how to sort. 
// if return is > 0 then it will sort 'a' after 'b'
// if return is < 0 then it will sort 'b' after 'a'
// if return is === 0 then it will keep original order
unsortedNums.sort((a,b)=> {
    if(a > b){
        return 1
    }
    else{
        return -1
    }

})

console.log(unsortedNums)

// short hand version-- second way to do it-- if you want to sort in reverse just switch variable position 
unsortedNums.sort((a,b) => a -b)

// short hand version --- third way of doing it
unsortedNums.sort((a,b) => {
    return a-b    
})

// if we want the character at the index of a string we use the charAt()
months.sort((a,b) => {
    if(a.charAt(1) > a.charAt(2)){
        return 1
    }else{
        return -1
    }
})

//.join()
// in python: " ".join(words)
const words =['Hello', 'world', 'again']
console.log(words.join(' ')) 

// .split()
const wordStr = 'Hello world again'
console.log(wordStr.split(" "))

/*
While loops
*/
let i=0
while (true) {
    console.log(i)
    i+=1

    if(i > 10) {
        break
    }
}

//  simpler version
i=0
while (i < 10) {
    console.log(i)

    i +=1
}

// we need to return a value to tell  java script weather or not to swap our variables
unsortedNums.sort((a,b)=> {
    if(a > b){
        return 1
    }
    else{
        return -1
    }

})

console.log(unsortedNums)





/*
OBJECTS
*/
const myPerson ={
    firstName: 'Dylan',
    lastName: 'smith',
    address: '123 main st',
    city: 'candyland'
}

console.log(myPerson)

// Accessinga key 

// Dot notation
console.log(myPerson.firstName)

// Index notation/Square bracket notation
console.log(myPerson['lastName'])

// Updating a key's value 
myPerson.firstName = 'Nalyd'

console.log(myPerson)

// Why use one over the other?
// use square braket notation to index through objects






/*
 conditionals
*/

let myName = 'shawn'

// print out 'hello shawn' if my name is shawn, otherwise pirint "i dont know you"

if(myName == 'shawn'){
    console.log('hello shawn')
} else if (myName == "hotness") {
    console.log('hey hot')
} else {
    console.log('i dont know you playa')
}

// functions in java

// return a single string based on the value of n

function fizzbuzz (i) {
    if (i % 3 == 0 && i % 5 == 0){
        return "fizzbuzz"
    }
    else if(i % 3 == 0){
        return 'fizzbuzz'
    }
    else if (i % 5 ==0){
        return'fizzbuzz'
    }
    else{
        return i
    }

}

// in java script there are a couple of diffrent ways to c reate a function

// equivalent of "def"
function firstFunction(param1){
    return param1
}

const secondFunction = function(param1) {
    return param1   
}

// equivalent of a lambda or an "anonymous funciton"
// arrow functions!
const thirdFunction = (param1) => {
    return param1
}

console.log(firstFunction('hello dogs'))
console.log(secondFunction('hello cats'))
console.log(thirdFunction('hello people'))






/* 
 FOR LOOPS
*/

// There are 3 main types of for loops

// traditional For Loop
// use when you need access to the index, or if you need to change the starting point, or change the increment number
//  for custom
let myLoopNums = [1,50,10,5]
// define counter
for(let i = 0; i < myLoopNums.length; i++){
    console.log(myLoopNums[i])
}

// for... of loop  cerate a variable that is equal to each individual value within alist
//  Equivalent to , in python: for currNum in my_loop_nums  2:01:55
// for numbers
for(let currNum of myLoopNums) {
    console.log(currNum)
}

// for... in loop  loops through the keys in collections, was designed to loop through objects
// for index
for(let currKey in myLoopNums) {
    console.log(currKey)
}
// for keys  values from an object loop through using
for(let currKey in myPerson)
// then access the current key and then the object  sqwuarebrackets currentkey agan?
{
    console.log(currKey, myPerson[currKey])
}






/* 
 formatted strings in java script
*/ 

let animal = 'Penguin'

console.log(` youre favorite animal is: ${animal}`)
