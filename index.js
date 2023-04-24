//! GLOBAL VARIABLES

const nav = document.querySelector("#movie-nav") // this is where the movie navs go
const seasonList = document.querySelector("#season-list") // name of all seasons 1-6
const spotlightSeason = document.querySelector("#spotlight-season") // spotlight spot for season names
const spotlightEpisodeList = document.querySelector(".episodes-list") // Episode List goes here




const season1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const season2 = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
const season3 = [22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
const season4 = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41]
const season5 = [42, 43, 44, 45, 46, 47, 48, 49, 50, 51]
const season6 = [52, 53, 54, 55, 56, 57, 58, 59, 60, 61]


//! HELPER FUNCTIONS
const handleEpisode = (episodeObj) => {
spotlightSeason.innerText = episodeObj.season1.name
}







function fetchEpisode(url) {
    fetch(url)
    .then (res => res.json())
    .then (episodes => episodes.results.forEach(episode => {
        handleEpisode(episode);
    }));
}
fetchEpisode("https://rickandmortyapi.com/api/episode");