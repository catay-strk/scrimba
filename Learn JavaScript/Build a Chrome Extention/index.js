let myLeads = []

const inputEL = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEL.value)
    console.log(myLeads)
    // 2. Call the renderLeads() function
    renderLeads()
})

// 1. Wrap the code below in a renderLeads() function
function renderLeads() {
    let listItems = ""
    
    for (let i = 0; i < myLeads.length; i++) {
         listItems += "<li>" + myLeads[i] + "</li>"
        // altenative Method:
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    
    ulEl.innerHTML = listItems
}