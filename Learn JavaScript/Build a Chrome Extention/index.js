let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

const inputEL = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
// 2. Grab the unordered list and store it in a const variable called ulEl
const unEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEL.value)
    console.log(myLeads)
})

// Render the leads in the unordered list using ulEl.textContent
for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i])
    unEl.textContent += myLeads[i] + " "
}