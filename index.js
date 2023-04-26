//! GLOBAL VARIABLES

const nav = document.querySelector("#movie-nav") // this is where the movie navs go
const seasonList = document.querySelector("#season-list") // name of all seasons 1-6
const spotlightSeason = document.querySelector("#spotlight-season") // spotlight spot for season names
const spotlightEpisodeList = document.querySelector(".episodes-list") // Episode List goes here
const spotlightImg = document.querySelector("#spotlight-img") // spotLight Images go here




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