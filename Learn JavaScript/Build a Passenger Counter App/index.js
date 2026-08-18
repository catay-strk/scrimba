let countEL = document.getElementById("count-el")
let count = 0
let saveEL = document.getElementById("save-el")

function increment() {
    count += 1
    countEL.textContent = count
}

function save() {
    let saveCount = count + " - "
    saveEL.textContent += saveCount
    count = 0
    countEL.textContent = count
}
