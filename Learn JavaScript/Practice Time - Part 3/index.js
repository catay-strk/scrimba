// SETTING THE STAGE
const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"

let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}

// Go through all variables and decide if they should be
// let or const
// Change the console logs to use template strings instead of double quotes

// Log out items in an array
let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function  log(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

log(myCourses)

// save to localStorage
// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

//localStorage.setItem("SaveStr", "Hello there!")
console.log(localStorage.getItem("SaveStr"))

// Generate sentence
// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
    let arrContent = arr[0]
    for (let i = 1; i < arr.length; i++) {
        arrContent += ", " + arr[i]
    }
    return `The ${arr.length} ${desc} are ${arrContent}`
}

console.log(generateSentence("largest countries", ["China", "India", "USA"]))
console.log(generateSentence("best fruits", ["Apples", "Bananas"]))