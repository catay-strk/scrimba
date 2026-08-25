import PocketBase from "https://cdn.jsdelivr.net/npm/pocketbase/dist/pocketbase.es.mjs"

const pb = new PocketBase("http://127.0.0.1:8090") // this doesn't make sense for client side code

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

referenceInDB.subscribe("*", async function (e) {
    const allRecords = await referenceInDB.getFullList()
    console.log(allRecords)
    // Challenge: Create a const called 'leads' which is an array containing the values inside of the snapshotValues object
    const leads = []
    for (let i = 0; i < allRecords.length; i++) {
        leads.push(allRecords[i].url)
    }
    // Challenge: Use the render function with 'leads' to render the leads in the app
    render(leads)
})

deleteBtn.addEventListener("dblclick", function() {

})

inputBtn.addEventListener("click", async function() {
    // Challenge: Import the 'push' function and modify the line above to push inputEl.value to the referenceInDB in the database
    await referenceInDB.create({url:inputEL.value})
    inputEL.value = ""
})