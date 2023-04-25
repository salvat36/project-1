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




// Functions GETS Season 1 Data
function fetchSeason1(url) {
    fetch(url)
    .then (res => res.json())
    .then (episodes => { 
        renderSeason(episodes)
        spotlightEpisode(episodes);
        handleNavClick(episodes)
    })};
fetchSeason1("http://localhost:3000/season1");

// Functions GETS Season 2 Data
function fetchSeason2(url) {
    fetch(url)
    .then (res => res.json())
    .then (episodes => { 
        renderSeason(episodes)
        handleNavClick(episodes)
    })};
fetchSeason2("http://localhost:3000/season2");

// Functions GETS Season 3 Data
function fetchSeason3(url) {
    fetch(url)
    .then (res => res.json())
    .then (episodes => { 
        renderSeason(episodes)
        // spotlightEpisode(episode);
    })};
fetchSeason3("http://localhost:3000/season3");

// Functions GETS Season 4 Data
function fetchSeason4(url) {
    fetch(url)
    .then (res => res.json())
    .then (episodes => { 
        renderSeason(episodes)
        // spotlightEpisode(episode);
    })};
fetchSeason4("http://localhost:3000/season4");

// Functions GETS Season 5 Data
function fetchSeason5(url) {
    fetch(url)
    .then (res => res.json())
    .then (episodes => { 
        renderSeason(episodes)
        // spotlightEpisode(episode);
    })};
fetchSeason5("http://localhost:3000/season5");

