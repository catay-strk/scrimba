
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard() {
    let number = Math.floor(Math.random() * 13) + 1

    if (number > 10) {
        return 10
    } else if (number === 1) {
        return 11
    } else {
        return number
    }
}

function startGame() {
    isAlive = true
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    let cardOne = getRandomCard()
    let cardTwo = getRandomCard()
    sum = cardOne + cardTwo
    //cards = [getRandomCard(), getRandomCard()]
    cards = [cardOne, cardTwo]
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
    let newCard = getRandomCard() // getRandomIntInclusive(2, 11)
    sum += newCard
    cards.push(newCard)
    renderGame()
}