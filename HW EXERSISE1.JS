//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(astr, alist) {
        for(names of alist) 
            if (astr.includes(names))
                console.log(`Matched ${names}`)
            else console.log('No Matches')


}

findWords(dog_string,dog_names)

//Call method here with parameters