const path = 'https://image.tmdb.org/t/p/original';
const fetch_path = 'https://api.themoviedb.org/3/movie/';
const tmdb_path = 'https://www.themoviedb.org/movie/';
const key_ = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTc1Njk0YjJiNTQwMzlhNDZjNzljMmJkODkxZTA2NyIsInN1YiI6IjY1NWZhNWM5ODgwNTUxMDExZDMzNTljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rmkzxGJzMgVov93DK62z2yqiW6Y_Q9-ocpab_ehkg8A';
let movies = [];

let film_template = {
    title: '',
    poster: '',
    overview: '',
    release_date: '',
    genres: '',
    director: '',
    actors: '',
    tmbd: '',
    rating: '',
    galery: '',
    trailer: ''
};

const newMovie = () => {window.location.href = '../newMovie.html';}

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + key_
    }
};

const getDetails = (id) => {
    let film = film_template;
    fetch(fetch_path+id+'?language=pl-PL', options)
    .then(response => response.json())
    .then((myJson) => {
        let temp = myJson;
        film.title = temp.title;
        film.poster = path + temp.poster_path;
        film.overview = temp.overview;
        film.release_date = temp.release_date;
        film.genres = temp.genres;
        film.tmbd = tmdb_path+id;
    })
    .catch(err => console.error(err));

    fetch(fetch_path+id+'/credits?language=en-US', options)
    .then(response => response.json())
    .then((myJson) => {
        film.actors = [];
        for(let i = 0; i < 5; i++)
            film.actors.push(myJson.cast[i].name);
    })
    .catch(err => console.error(err));

    fetch(fetch_path+id+'/images', options)
    .then(response => response.json())
    .then((myJson) => {
        film.galery = [];
        myJson.backdrops.forEach(element => {
            film.galery.push(element.file_path);
        });
    })
    .catch(err => console.error(err));

    fetch(fetch_path+id+'/reviews?language=en-US', options)
    .then(response => response.json())
    .then((myJson) => {
        film.rating = [];
        let ratingScore = 0;
        let ratingCount = myJson.results.length;
        myJson.results.forEach(element => {
            ratingScore += element.author_details.rating;
        });
        ratingScore = parseFloat((ratingScore/ratingCount).toFixed(2));
        film.rating.push(ratingScore);
        film.rating.push(ratingCount);
    })
    .catch(err => console.error(err));

    fetch(fetch_path+id+'/videos?language=en-EN', options)
    .then(response => response.json())
    .then((myJson) => {
        let links = getTrailer(myJson.results);
        film.trailer = 'https://www.youtube.com/watch?v='+links[0].key;
    })
    .catch(err => console.error(err));
}

const getGeneratedMovies = (moviesArray) => {
    moviesArray.forEach(element => {
        let movieSection = document.createElement('section');
        movieSection.classList.add('movie');
        movieSection.setAttribute("onclick", "getDetails("+element.id+")");
    
        let moviePoster = document.createElement('img');
        let movieTitle = document.createElement('h3');
        let movieYear = document.createElement('span');
    
        moviePoster.src = path + element.poster_path;
        movieTitle.innerHTML = element.title;
        movieYear.innerHTML = (element.release_date).split("-")[0];
    
        document.querySelector('.movies').appendChild(movieSection).append(moviePoster, movieTitle, movieYear);
    });
}
const getTrailer = (list) => list.filter(list => list.name == 'Official Trailer' || list.name == 'Official Teaser');