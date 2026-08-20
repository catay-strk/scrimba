let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

const inputEL = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const unEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEL.value)
    console.log(myLeads)
})

// Replace .textContent with .innerHTML and use <li> tags
for (let i = 0; i < myLeads.length; i++) {
    unEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}