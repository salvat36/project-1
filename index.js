//! GLOBAL VARIABLES

const nav = document.querySelector("#movie-nav") // this is where the movie navs go
const seasonList = document.querySelector("#season-list") // name of all seasons 1-6
const spotlightSeason = document.querySelector("#spotlight-season") // spotlight spot for season names
const spotlightEpisodeList = document.querySelector(".episodes-list") // Episode List goes here
const spotlightImg = document.querySelector("#spotlight-img") // spotLight Images go here




//! HELPER FUNCTIONS
const spotlightEpisode = (episodeObj) => {
spotlightImg.src = episodeObj[0].image
episodeObj.forEach(episode => {
    let episodeList = document.createElement("li")
    episodeList.innerText = episode.name
    spotlightEpisodeList.append(episodeList)       
})
}

const renderSeason = (seasonObj) => {
    const seasonImg = document.createElement("img")
    seasonImg.src = seasonObj[0].image
    nav.append(seasonImg)
}







function fetchSeason1(url) {
    fetch(url)
    .then (res => res.json())
    .then (episodes => { 
        renderSeason(episodes)
        spotlightEpisode(episodes);
    })};
fetchSeason1("http://localhost:3000/season1");

function fetchSeason2(url) {
    fetch(url)
    .then (res => res.json())
    .then (episodes => { 
        renderSeason(episodes)
        // spotlightEpisode(episode);
    })};
fetchSeason2("http://localhost:3000/season2");

function fetchSeason3(url) {
    fetch(url)
    .then (res => res.json())
    .then (episodes => { 
        renderSeason(episodes)
        // spotlightEpisode(episode);
    })};
fetchSeason3("http://localhost:3000/season3");

function fetchSeason4(url) {
    fetch(url)
    .then (res => res.json())
    .then (episodes => { 
        renderSeason(episodes)
        // spotlightEpisode(episode);
    })};
fetchSeason4("http://localhost:3000/season4");

function fetchSeason5(url) {
    fetch(url)
    .then (res => res.json())
    .then (episodes => { 
        renderSeason(episodes)
        // spotlightEpisode(episode);
    })};
fetchSeason5("http://localhost:3000/season5");

