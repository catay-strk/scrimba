import PocketBase from "https://cdn.jsdelivr.net/npm/pocketbase/dist/pocketbase.es.mjs"
//import PocketBase from 'pocketbase'

const pb = new PocketBase("http://127.0.0.1:8091")

const reference = pb.collection("birthdays")

const birthdayInputField = document.getElementById("birthday-input")
const submitButton = document.getElementById("submit-button")

 submitButton.addEventListener("click", async function() {
    await reference.create({birthday:birthdayInputField.value})
    birthdayInputField.value = ""
})