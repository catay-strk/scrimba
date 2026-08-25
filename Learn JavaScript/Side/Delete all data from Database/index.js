import PocketBase from "https://cdn.jsdelivr.net/npm/pocketbase/dist/pocketbase.es.mjs"
//import PocketBase from 'pocketbase'

const pb = new PocketBase("http://127.0.0.1:8092")

const referenceInDB = pb.collection("chores")

const choreInputEl = document.getElementById("chore-input")
const addButtonEl = document.getElementById("add-button")
const deleteAllButtonEl = document.getElementById("delete-all-button")
const ulEl = document.getElementById("chores-list")

function render(chores) {
    let listItems = ""
    for (let i = 0; i < chores.length; i++) {
        listItems += `
            <li>${chores[i]}</li>
        `
    }
    ulEl.innerHTML = listItems
}

// onValue(referenceInDB, function(snapshot) {
//     const snapshotDoesExist = snapshot.exists()
//     if (snapshotDoesExist) {
//         const snapshotValues = snapshot.val()
//         const chores = Object.values(snapshotValues)
//         render(chores)
//     } 
// })
referenceInDB.subscribe("*", async function (e) {
    const allRecords = await referenceInDB.getFullList()
    if (allRecords.length >= 1) {
        const chores = []
        for (let i = 0; i < allRecords.length; i++) {
            chores.push(allRecords[i].chore)
        }
        render(chores)
    }
})

deleteAllButtonEl.addEventListener("dblclick", async function() {
    // remove(referenceInDB)
    const allRecords = await referenceInDB.getFullList()

    for (const record of allRecords) {
        await referenceInDB.delete(record.id)
    }

    ulEl.innerHTML = ""
})

addButtonEl.addEventListener("click", async function() {
    await referenceInDB.create({chore: choreInputEl.value})
    // push(referenceInDB, choreInputEl.value)
    choreInputEl.value = ""
})