const getTheMostPopularMovies = () => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=pl-PL', options)
    .then((response) => {
        if(!response.ok)
            throw new Error("Network response was not OK");
        return response.json();
    })
    .then((myJson) => {
        myJson.results.forEach(element => {
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
document.onload = getTheMostPopularMovies();