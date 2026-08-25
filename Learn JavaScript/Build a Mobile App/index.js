import PocketBase from "https://cdn.jsdelivr.net/npm/pocketbase/dist/pocketbase.es.mjs"

const pb = new PocketBase("http://127.0.0.1:8090") // this doesn't make sense for client side code

// Challenge: Create a const called 'referenceInDB' and use the ref function to create a reference called 'leads' in the database
const referenceInDB = pb.collection("leads")

const inputEL = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

function render(leads) {
    let listItems = ""
    
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
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

deleteBtn.addEventListener("dblclick", function() {

})

inputBtn.addEventListener("click", async function() {
    // Challenge: Import the 'push' function and modify the line above to push inputEl.value to the referenceInDB in the database
    await referenceInDB.create({url:inputEL.value})
    inputEL.value = ""
})