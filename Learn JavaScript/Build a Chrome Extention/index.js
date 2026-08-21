let myLeads = []

const inputEL = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

localStorage.setItem("myLeads", "www.examplelead.com")
console.log(localStorage.getItem("myLeads"))
localStorage.clear()

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEL.value)
    console.log(myLeads)
    inputEL.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    
    for (let i = 0; i < myLeads.length; i++) {
        // Wrap the lead in an anchor tag (<a>) inside the <li>
        // Can you make the link open in a new tab?
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>`
        console.log(listItems)
        // altenative Method:
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    
    ulEl.innerHTML = listItems
}