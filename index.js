//! GLOBAL VARIABLES
const nav = document.querySelector("#movie-nav") // this is where the movie navs go
const seasonList = document.querySelector("#season-list") // name of all seasons 1-6
const spotlightSeason = document.querySelector("#spotlight-season") // spotlight spot for season names
const spotlightEpisodeList = document.querySelector(".episodes-list") // Episode List goes here
const spotlightImg = document.querySelector("#spotlight-img") // spotLight Images go here
const seasonDropdown = document.querySelector("#season-dropdown")
const charDropdown = document.querySelector("#char-dropdown")
const charImg = document.querySelector("#char-img")
const commentForm = document.querySelector("#comment-form")
const userComments = document.querySelector("#user-comments")
const commentInput = document.querySelector("#comment-input")


//! HELPER FUNCTIONS
//Function renders season 1 data to page on load
const spotlightEpisode = (episodeObj) => {
spotlightImg.src = episodeObj[0].image
episodeObj.forEach(episode => {
    let episodeList = document.createElement("li")
    episodeList.innerText = episode.name
    spotlightEpisodeList.append(episodeList)       
})
}


//Function renders each seasons title and image and appends it to nav
const renderSeason = (seasonObj) => {
    const seasonImg = document.createElement("img")
    seasonImg.src = seasonObj[0].image
    const seasonName = document.createElement("h2")
    seasonName.innerText = seasonObj[0].season_name
    nav.append(seasonName, seasonImg)
    seasonImg.addEventListener("click", () => handleNavClick(seasonObj))
}



const handleNavClick = (seasonClick) => {
    spotlightEpisodeList.innerHTML = ""
    spotlightEpisode(seasonClick);
}

//updateImages function to be used for renderCharForOption
function updateImages(){
    charImg.alt = ".images/404.png"
    charImg.src = charDropdown.value    
}


//renderCharForOption
function renderCharForOption(charObj) {
    let charOption = document.createElement("option")
    charOption.value = charObj.image 
    charOption.innerText = charObj.name
    seasonDropdown.addEventListener("change", updateImages)
    charDropdown.append(charOption)   
}

//handleSubmit function
const handleSubmit = (e) => {
    e.preventDefault()
    let li = document.createElement("li")
    const userInput = commentInput.value
    li.innerText = userInput

    userComments.append(li)
    commentForm.reset()
}


//event listener for user input from comment form
commentForm.addEventListener("submit", handleSubmit)

//FETCH function for character
fetch ("http://localhost:3000/characters")
.then (response => response.json())
.then (charNames => {   
    charNames.forEach(charName =>renderCharForOption(charName))
    }   
)


//FETCH CALL
const allSeasons = [
    fetch("http://localhost:3000/season1"),
    fetch("http://localhost:3000/season2"),
    fetch("http://localhost:3000/season3"),
    fetch("http://localhost:3000/season4"),
    fetch("http://localhost:3000/season5")
    ]
    
    Promise.all(allSeasons)
    .then ((res) => {
        Promise.all(res.map((season) => {
            return season.json();
        }))
        .then(episodes => episodes.forEach(episode => {
            spotlightEpisode(episode)
            renderSeason(episode)
            handleNavClick(episode)
        }))
    })