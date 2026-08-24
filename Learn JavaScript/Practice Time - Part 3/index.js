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