import PocketBase from "https://cdn.jsdelivr.net/npm/pocketbase/dist/pocketbase.es.mjs"
//import PocketBase from 'pocketbase'

const pb = new PocketBase("http://127.0.0.1:8092")

const referenceInDB = pb.collection("products")

const productNameInputField = document.getElementById("product-name-input")
const productValueInputField = document.getElementById("product-value-input")
const submitButton = document.getElementById("submit-button")

// onValue(referenceInDB, function(snapshot) {
//     console.log(snapshot)
// })
// -- this will not give a list like firebase, but the action as it happens
// referenceInDB.subscribe("*", e => {
//     console.log("Realtime event: ", e)
// })
// -- to show the full list evertime do:
referenceInDB.subscribe("*", async function (e) {
    const allRecords = await referenceInDB.getFullList()
    console.log(allRecords)
})


submitButton.addEventListener("click", async function() {
    productNameInputField.value
    await referenceInDB.create({productName: productNameInputField.value})
    // push(referenceInDB, productNameInputField.value)
    productNameInputField.value = ""
})