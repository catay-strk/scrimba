// function getRandomIntInclusive(min, max) {
//   const minCeiled = Math.ceil(min);
//   const maxFloored = Math.floor(max);
//   return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
// }

// 2. Use getRandomCard() to set the values of firstCard and secondCard

let firstCard = getRandomCard() // getRandomIntInclusive(2, 11)
let secondCard = getRandomCard() // getRandomIntInclusive(2, 11)
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// 1. Create a function, getRandomCard(), that always returns the number 5

function getRandomCard() {
    return 5
}

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards:"
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i]
    }
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
    // 3. Use the getRandomCard() to set the value of card
    let newCard = getRandomCard() // getRandomIntInclusive(2, 11)
    sum += newCard
    cards.push(newCard)
    renderGame()
}