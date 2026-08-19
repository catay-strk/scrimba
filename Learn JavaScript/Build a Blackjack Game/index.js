// function getRandomIntInclusive(min, max) {
//   const minCeiled = Math.ceil(min);
//   const maxFloored = Math.floor(max);
//   return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
// }

let firstCard = 6 // getRandomIntInclusive(2, 11)
let secondCard = 9 // getRandomIntInclusive(2, 11)
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
// 2. Store the sum paragraph in a variable called sumEl
//let sumEL = document.getElementById("sum-el")
let sumEL = document.querySelector("#sum-el")

function startGame() {
    // 3. Render the sum on the page using this format -> "Sum: 14"
    sumEL.textContent = "Sum: " + sum
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
