//                  Variables
// Burger Menu
const burgerMenuBtn = document.querySelector(".burger-menu-icon")
const exitFromBM = document.querySelector(".bm-right-side")
// Pop Up
const popUpOpener = document.querySelector(".profile-img")
const popUpOverlay = document.querySelector(".popup")
const popUpUserCard = document.querySelector(".user-card")
const popupCloserBtn = document.querySelector(".close-the-popup")
// third Trending card
const thirdTrendingCard = document.getElementById("thirdTrendingCard")
// Scroller
const leftArr = document.querySelectorAll(".left-arrow")
const rightArr = document.querySelectorAll(".right-arrow")
const firstContent = document.querySelector(".bottom-slider")
const secondContent = document.querySelector(".trending-cards-in-slider")
const thirdContent = document.querySelector(".happening-now-cont")
const scrollWidth = firstContent.scrollWidth - firstContent.clientWidth

//                  Event Listeners
// Burger Menu
burgerMenuBtn.addEventListener("click", () => {
    document.querySelector(".burger-menu-modal").style.display = "flex"
})
exitFromBM.addEventListener("click", () => {
    document.querySelector(".burger-menu-modal").style.display = "none"
})
// Pop Up
popUpOverlay.addEventListener("click", () => {
    popUpUserCard.style.display = "none"
    popUpOverlay.style.display = "none"
})
popupCloserBtn.addEventListener("click", () => {
    popUpUserCard.style.display = "none"
    popUpOverlay.style.display = "none"
})
popUpOpener.addEventListener("click", () => {
    popUpUserCard.style.display = "flex"
    popUpOverlay.style.display = "flex"
})
// Scroller
let scrollPositionFirst = 0
leftArr[0].addEventListener('click', () => {
    scrollPositionFirst -= firstContent.clientWidth;
    if (scrollPositionFirst < 0) {
        scrollPositionFirst = 0
    }
    firstContent.style.transform = `translateX(-${scrollPositionFirst}px)`
})
rightArr[0].addEventListener('click', () => {
    scrollPositionFirst += firstContent.clientWidth;
    if (scrollPositionFirst > scrollWidth) {
        scrollPositionFirst = scrollWidth
    }
    firstContent.style.transform = `translateX(-${scrollPositionFirst}px)`
})

let scrollPositionSecond = 0
leftArr[1].addEventListener('click', () => {
    scrollPositionSecond -= secondContent.clientWidth;
    if (scrollPositionSecond < 0) {
        scrollPositionSecond = 0;
    }
    secondContent.style.transform = `translateX(-${scrollPositionSecond}px)`
})
rightArr[1].addEventListener('click', () => {
    scrollPositionSecond += secondContent.clientWidth;
    if (scrollPositionSecond > scrollWidth) {
        scrollPositionSecond = scrollWidth
    }
    secondContent.style.transform = `translateX(-${scrollPositionSecond}px)`
})

// Screen changing styles
window.addEventListener("resize", () => {
    let screenSize = window.innerWidth;

    // Tablet
    if (screenSize >= 768) {
        document.querySelector(".burger-menu-modal").style.display = "none"
    }
    // Desktop
    if (screenSize >= 1440) {
        document.getElementById("thirdTrendingCard").style.display = "flex"
    } else {
        document.getElementById("thirdTrendingCard").style.display = "none"
    }
})