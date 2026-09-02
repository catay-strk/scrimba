// const toggleBtn = document.getElementsByClassName("mobile-nav-toggle")[0]
// const primaryNavEl = document.getElementById("primary-navigation")

// toggleBtn.addEventListener("click", function() {
//     if (primaryNavEl.style.getPropertyValue("transform") === "translateX(100%)" ) {
//         primaryNavEl.style.setProperty("transform", "translateX(0%)")
//         toggleBtn.style.setProperty("background-image", "url(./assets/shared/icon-close.svg)")
//     } else {
//         primaryNavEl.style.setProperty("transform", "translateX(100%)")
//         toggleBtn.style.setProperty("background-image", "url(./assets/shared/icon-hamburger.svg)")
//     }
// })

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible")
    if (visibility === "false") {
        nav.setAttribute("data-visible", true)
        navToggle.ariaExpanded = true
    } else {
        nav.setAttribute("data-visible", false)
        navToggle.ariaExpanded = false
    }
})