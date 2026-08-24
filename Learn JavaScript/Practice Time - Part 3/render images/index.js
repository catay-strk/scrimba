// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const containerEL = document.getElementById("container")

function renderTeamImages(images) {
    let imgDOM = ""
    for (let i = 0; i < images.length; i++) {
        imgDOM += `<img alt="Employee in the company" class="team-img" src="${images[i]}">`
    }
    containerEL.innerHTML = imgDOM
}

renderTeamImages(imgs)