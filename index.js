//! GLOBAL VARIABLES













function fetchEpisode(url) {
    fetch(url)
    .then (res => res.json())
    .then (episodes => episodes.results.forEach(episode => {
        handleEpisode();
    }));
}
fetchEpisode("https://rickandmortyapi.com/api/episode");