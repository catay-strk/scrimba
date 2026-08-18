// Create two variables, firstName and lastName
let firstName = "Catay"
let lastName = "Stark"
// Concatenate the two variables into a third variable called fullName
let fullName = firstName + " " + lastName
// Log fullName to the console
console.log(fullName)

let name = "Linda"
let greeting = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called

function greet() {
    console.log(greeting + ", " + name + "!")
}

greet()

let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3Points() {
    myPoints += 3
}

function remove1Point() {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

// Call the functions to that the line below logs out 10
console.log(myPoints)

// Try to predict what each of the lines will log out
console.log("2" + 2) // 22
console.log(11 + 7) // 18
console.log(6 + "5") // 65
console.log("My points: " + 5 + 9) // My points 59
console.log(2 + 2) // 4
console.log("11" + "14") // 1114