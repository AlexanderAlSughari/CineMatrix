const searchMoviesWithThatName = (keyword) => {
    document.querySelector('.title').innerHTML = "Twoje wyszukiwania <i class='icon-search'></i>";
    document.querySelector('.movies').innerHTML = "";

    fetch('https://api.themoviedb.org/3/search/movie?query='+keyword+'&include_adult=false&language=pl-PL&page=1', options)
    .then((response) => {
        if(!response.ok)
            throw new Error("Network response was not OK");
        return response.json();
    })
    .then((myJson) => {
        const genre = parseInt(document.getElementById('genres').value);
        if(genre != 0)
            moviesArray = filterMoviesByGenre(myJson.results, genre);
        else
            moviesArray = myJson.results;

        if(moviesArray.length == 0)
            document.querySelector('.movies').innerHTML = "brak wyników :(";
        
        moviesArray.forEach(element => {
            let movieSection = document.createElement('section');
            movieSection.classList.add('movie');

            let moviePoster = document.createElement('img');
            let movieTitle = document.createElement('h3');
            let movieYear = document.createElement('span');

            moviePoster.src = path + element.poster_path;
            movieTitle.innerHTML = element.title;
            movieYear.innerHTML = (element.release_date).split("-")[0];

            document.querySelector('.movies').appendChild(movieSection).append(moviePoster, movieTitle, movieYear);
        });
    })
    .catch(err => console.error(err));
}
const filterMoviesByGenre = (list, chosenGenre) => list.filter(movie => movie.genre_ids.includes(chosenGenre));
const sortMoviesIntoOrder = (list) => list.sort(movie => movie.genre_ids == chosenGenre);