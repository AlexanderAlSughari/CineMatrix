const getTheMostPopularMovies = () => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=pl-PL', options)
    .then(response => response.json())
    .then((myJson) => {
        let moviesArray = myJson.results;
        getGeneratedMovies(moviesArray);
    })
    .catch(err => console.error(err));
}
document.onload = getTheMostPopularMovies();