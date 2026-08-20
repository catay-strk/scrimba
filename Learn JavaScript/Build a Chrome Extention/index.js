let myLeads = []

const inputEL = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

// Push the value "www.awesomelead.com" to myArray when the input button is clicked

inputBtn.addEventListener("click", function() {
    //myLeads.push(inputEL.value)
    myLeads.push("www.awesomelead.com")
    console.log(myLeads)
})