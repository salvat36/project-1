//! GLOBAL VARIABLES

const nav = document.querySelector("#movie-nav") // this is where the movie navs go
const seasonList = document.querySelector("#season-list") // name of all seasons 1-6
const spotlightSeason = document.querySelector("#spotlight-season") // spotlight spot for season names
const spotlightEpisodeList = document.querySelector(".episodes-list") // Episode List goes here
const spotlightImg = document.querySelector("#spotlight-img") // spotLight Images go here




//! HELPER FUNCTIONS
const spotlightEpisode = (episodeObj) => {
spotlightSeason.innerText = ADD-SEASON-NAMES-HERE

}







function fetchEpisode(url) {
    fetch(url)
    .then (res => res.json())
    .then (episodes => episodes.forEach(episode => {
        spotlightEpisode(episode);
    }));
}
fetchEpisode("http://localhost:3000/season1");