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

const picture = document.getElementById(bodyClass + '-picture')

const tabList = document.querySelector('[role="tablist"]')
const tabs = tabList.querySelectorAll('[role="tab"]')

tabList.addEventListener('keydown', changeTabFocus)

tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => updateContentTo(e))
})

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

function updateContentTo(e) {
    
    updateActiveTab(e)

    let dataArr = []

    if (bodyClass === "destination") {
        dataArr = destinations
    } else if (bodyClass === "crew") {
        dataArr = crew
    } else if (bodyClass === "technology") {
        dataArr = technology
    }

    const target = e.target.getAttribute("aria-controls")

    const objectId = dataArr.findIndex(obj => obj.name === target)
    
    if (objectId === -1) {
        console.log("No valid data object found with name: " + target)
        return
    } else {
        
        console.log(objectId)
        for ( let key in dataArr[objectId]) {
            if (key === "images") {
                const picSources = dataArr[objectId].images
                const pictureEL = document.getElementById(bodyClass + "-picture")
                let imageSources = ""
                
                //loop for picture element, first as <img>, rest as <source> before
                for (let picKey in  picSources) {
                    if (imageSources === "") {
                        imageSources = `<img src="${picSources[picKey]}" alt="The ${target}"/>`
                        
                    } else {
                        imageSources = 
                        `<source srcset="${picSources[picKey]}" type="image/${picKey}">
                        ${imageSources}`
                        
                    }
                }
                console.log(imageSources)
                pictureEL.innerHTML = imageSources
                
            } else {
                console.log(dataArr[objectId][key])
                const currentElement = document.getElementById(`${bodyClass}-${key}`)
                console.log(currentElement)
                currentElement.textContent = dataArr[objectId][key]
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