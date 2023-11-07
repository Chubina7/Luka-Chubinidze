//                  Variables
// Burger Menu
const burgerMenuBtn = document.querySelector(".burger-menu-icon")
const exitFromBM = document.querySelector(".bm-right-side")
// Pop Up
const popUpOpener = document.querySelector(".profile-img")
const popUpOverlay = document.querySelector(".popup")
const popUpUserCard = document.querySelector(".user-card")
const popupCloserBtn = document.querySelector(".close-the-popup")
// Data cards
const cardsCont = document.querySelector(".cards-container")

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

// Screen changing styles
window.addEventListener("resize", () => {
    let screenSize = window.innerWidth;

    // Tablet
    if (screenSize >= 768) {
        document.querySelector(".burger-menu-modal").style.display = "none"
    }
})

// Fetching data
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(result => result.map(user => {
        // Creating card
        const card = document.createElement("div")
        card.setAttribute("class", "card")
        cardsCont.append(card)

        // Creating card saying tag
        const cardSaying = document.createElement("p")
        cardSaying.setAttribute("class", "card-saying")
        cardSaying.innerText = `User ${user.id} posted:`
        card.append(cardSaying)

        // Creating card title
        const title = document.createElement("h1")
        title.setAttribute("class", "title")
        title.innerText = user.title.replace(user.title.charAt(0), `${user.title.charAt(0).toUpperCase()}`)
        card.append(title)

        // Creating card comment
        const comment = document.createElement("p")
        comment.setAttribute("class", "comment")
        comment.innerText = user.body.replace(user.body.charAt(0), `${user.body.charAt(0).toUpperCase()}`)
        card.append(comment)

        // Creating time div
        const newsTime = document.createElement("div")
        newsTime.setAttribute("class", "news-time")
        card.append(newsTime)

        // Creating icon into time div
        const timeIcon = document.createElement("img")
        timeIcon.setAttribute("class", "time-icon")
        timeIcon.src = "./assests/icons/time.png"
        newsTime.append(timeIcon)

        // Creating exact time into time div
        const time = document.createElement("p")
        time.setAttribute("class", "time")
        time.innerText = `${user.userId}h ago`
        newsTime.append(time)
    }))