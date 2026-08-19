// AND:  &&
let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating certificate....")
}

let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function

function showSolution() {
    console.log("Showing the solution....")
}

if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}

// OR:  ||

// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true
let likesDokumentaries = true
let likesStartups = false

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}

if (likesDokumentaries === true || likesStartups === true) {
    recommendMovie()
}