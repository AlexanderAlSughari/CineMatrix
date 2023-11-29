const showMyMovies = () => {
    let film = [];
    film = getCookie('myMovie').split(',');

    let movieSection = document.createElement('section');
    movieSection.classList.add('movie');

    let movieTitle = document.createElement('h3');
    let movieDate = document.createElement('span');
    let movieRuntime = document.createElement('span');
    let movieGenres = document.createElement('span');
    let movieOverview = document.createElement('span');

    movieTitle.innerHTML = film[0];
    movieDate.innerHTML = film[1];
    movieRuntime.innerHTML = film[2];
    movieGenres.innerHTML = film[3];
    movieOverview.innerHTML = film[4];

    movieSection.append(movieTitle, movieDate, movieRuntime, movieGenres, movieOverview);
    document.querySelector('.movies').append(movieSection);

}
document.onload = showMyMovies();