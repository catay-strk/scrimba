// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEL = document.getElementById("count-el")
let count = 0
let saveEL = document.getElementById("save-el")

function increment() {
    count += 1
    countEL.textContent = count
}

function save() {
    // Google:
// innerText alternative mdn
    let saveCount = count + " - "
    saveEL.textContent += saveCount
    count = 0
    countEL.textContent = count
}

