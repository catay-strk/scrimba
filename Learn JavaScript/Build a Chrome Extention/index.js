let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

const inputEL = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEL.value)
    console.log(myLeads)
})

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
let listItems = ""

for (let i = 0; i < myLeads.length; i++) {
    // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
     listItems += "<li>" + myLeads[i] + "</li>"
    // altenative Method:
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
}

// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItems