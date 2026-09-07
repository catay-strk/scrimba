async function loadData() {
  const response = await fetch('./data.json');
  const data = await response.json();
  
  return data
}

const data = await loadData()

const destinations = data.destinations
const crew = data.crew
const technology = data.technology

const body = document.body
const bodyClass = body.getAttribute('class')

const picture = document.getElementById('destination-picture')

const tabList = document.querySelector('[role="tablist"]')
const tabs = tabList.querySelectorAll('[role="tab"]')

tabList.addEventListener('keydown', changeTabFocus)

const moonBtn = document.getElementById('moon-btn')
const marsBtn = document.getElementById('mars-btn')
const europaBtn = document.getElementById('europa-btn')
const titanBtn = document.getElementById('titan-btn')

moonBtn.addEventListener("click", (e) => updateDestinationTo(e, 'Moon'))
marsBtn.addEventListener("click", (e) => updateDestinationTo(e, 'Mars'))
europaBtn.addEventListener("click", (e) => updateDestinationTo(e, 'Europa'))
titanBtn.addEventListener("click", (e) => updateDestinationTo(e, 'Titan'))

let tabFocus = 0
function changeTabFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;
    
    // change the tabindex of the current tab to -1
    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1)

        // if the right key is pushed, move to the next tab on the right
        if (e.keyCode === keydownRight) {
            tabFocus++
            if (tabFocus >= tabs.length) {
                tabFocus = 0
            }
            
        } else if (e.keyCode === keydownLeft) { // if the left key is pushed, move to the next tab on the left
            tabFocus--
            if (tabFocus < 0) {
                tabFocus = tabs.length - 1
            }
        }
        
        tabs[tabFocus].setAttribute("tabindex", 0)
        tabs[tabFocus].focus()
    }
    
}

function updateDestinationTo(e, objName) {
    
    updateActiveTab(e)

    const objectId = destinations.findIndex(obj => obj.name === objName)
    
    if (objectId === -1) {
        console.log("No valid data object found with name: " + objName)
        return
    } else {
        
        console.log(objectId)
        for ( let key in destinations[objectId]) {
            if (key === "images") {
                const picSources = destinations[objectId].images
                const pictureEL = document.getElementById("destination-picture")
                let imageSources = ""
                
                //loop for picture element, first as <img>, rest as <source> before
                for (let picKey in  picSources) {
                    if (imageSources === "") {
                        imageSources = `<img src="${picSources[picKey]}" alt="The ${objName}"/>`
                        
                    } else {
                        imageSources = 
                        `<source srcset="${picSources[picKey]}" type="image/${picKey}">
                        ${imageSources}`
                        
                    }
                }
                console.log(imageSources)
                pictureEL.innerHTML = imageSources
                
            } else {
                console.log(destinations[objectId][key])
                const currentElement = document.getElementById(`destination-${key}`)
                console.log(currentElement)
                currentElement.textContent = destinations[objectId][key]
            }
            
        }
    }
    
}

function updateActiveTab(e) {

    const targetTab = e.target
    const tabContainer = targetTab.parentNode

    tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false)

    targetTab.setAttribute("aria-selected", true)
    
}