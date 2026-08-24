let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]
const logBtn = document.getElementById("log-btn")

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

logBtn.addEventListener("click", function() {
    console.log(data[0].score)
})