//                  Variables
// Discovery page
const selectDateBtn = document.getElementById("selectDate")
const dropdownSelection = document.querySelector(".select-items")
const goBackArrow = document.querySelector(".go-back-arrow")
// Pop Up
const popUpOpener = document.querySelector(".profile-img")
const popUpOverlay = document.querySelector(".popup")
const popUpUserCard = document.querySelector(".user-card")
const popupCloserBtn = document.querySelector(".close-the-popup")

//                  Event Listeners
// Discovery page
selectDateBtn.addEventListener("click", () => {
    dropdownSelection.classList.toggle("disp-none")
    dropdownSelection.classList.toggle("disp-flex")
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