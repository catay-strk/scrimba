// function getRandomIntInclusive(min, max) {
//   const minCeiled = Math.ceil(min);
//   const maxFloored = Math.floor(max);
//   return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
// }

// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
let firstCard = 6 // getRandomIntInclusive(2, 11)
let secondCard = 9 // getRandomIntInclusive(2, 11)
// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard

console.log(sum)