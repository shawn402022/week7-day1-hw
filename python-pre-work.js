// Question 1
// Write a function to print "hello_USERNAME!" USERNAME is the input of the function. The first line of the code has been defined as below.

//     def hello_name(user_name):
//         .....
function hello_name(user_name) {
    console.log(user_name)
}

hello_name('shawn')


// Question 2
// Write a python function, first_odds that prints the odd numbers from 1-100 and returns nothing

//     def first_odds():
//         .....

function first_odds(){
    for(let i =1; i < 100; i+=2){
        console.log(i)
    }
}

first_odds()