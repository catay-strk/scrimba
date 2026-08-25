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
    // Challenge: Only run the code below if a snapshot exists
    if (allRecords.length >= 1) {
        const leads = []
        for (let i = 0; i < allRecords.length; i++) {
            leads.push(allRecords[i].url)
        }
        render(leads)
    }
})

deleteBtn.addEventListener("dblclick", async function() {
// Challenge: Import the 'remove' function and call it here to delete the leads
    const allRecords = await referenceInDB.getFullList()

    for (const record of allRecords) {
        await referenceInDB.delete(record.id)
    }
    // Challenge: Clear all the leads from ulEl
    ulEl.innerHTML = ""
})

inputBtn.addEventListener("click", async function() {
    await referenceInDB.create({url:inputEL.value})
    inputEL.value = ""
})