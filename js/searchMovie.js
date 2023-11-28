const searchMoviesWithThatName = (keyword) => {
    document.querySelector('.title').innerHTML = "Twoje wyszukiwania <i class='icon-search'></i>";
    document.querySelector('.movies').innerHTML = "";

    fetch('https://api.themoviedb.org/3/search/movie?query='+keyword+'&include_adult=false&language=pl-PL&page=1', options)
    .then(response => response.json())
    .then((myJson) => {
        let moviesArray = myJson.results;
        const genre = parseInt(document.getElementById('genres').value);
        const order = parseInt(document.getElementById('order').value);

        moviesArray = (genre != 0) ? filterMoviesByGenre(moviesArray, genre) : moviesArray;

        moviesArray = (order == 1) ? orderMoviesByPopularityDesc(moviesArray) : moviesArray;
        moviesArray = (order == 2) ? orderMoviesByPopularityAsc(moviesArray) : moviesArray;
        moviesArray = (order == 3) ? orderMoviesByDateDesc(moviesArray) : moviesArray;
        moviesArray = (order == 4) ? orderMoviesByDateAsc(moviesArray) : moviesArray;
        moviesArray = (order == 5) ? orderMoviesByTitleDesc(moviesArray) : moviesArray;
        moviesArray = (order == 6) ? orderMoviesByTitleAsc(moviesArray) : moviesArray;

        if(moviesArray.length == 0)
            document.querySelector('.movies').innerHTML = "brak wyników :(";
        
        getGeneratedMovies(moviesArray);
    })
    .catch(err => console.error(err));
}
const filterMoviesByGenre = (list, chosenGenre) => list.filter(movie => movie.genre_ids.includes(chosenGenre));
const orderMoviesByPopularityDesc = (list) => list.sort((a, b) => b.popularity - a.popularity);
const orderMoviesByPopularityAsc = (list) => list.sort((a, b) => a.popularity - b.popularity);
const orderMoviesByDateDesc = (list) => list.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
const orderMoviesByDateAsc = (list) => list.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
const orderMoviesByTitleAsc = (list) => list.sort((a, b) => a.title.localeCompare(b.title));
const orderMoviesByTitleDesc = (list) => list.sort((a, b) => b.title.localeCompare(a.title));