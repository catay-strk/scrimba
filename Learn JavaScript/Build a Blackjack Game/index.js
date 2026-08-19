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
let sumEL = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
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

function newCard() {
    console.log("Drawing a new card from the deck!")
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let newCard = 6 // getRandomIntInclusive(2, 11)
    // 2. Add the new card to the sum variable
    sum += newCard
    // 3. Call startGame()
    startGame()
}