const path = 'https://image.tmdb.org/t/p/original';
const fetch_path = 'https://api.themoviedb.org/3/movie/';
const tmdb_path = 'https://www.themoviedb.org/movie/';
const key_ = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTc1Njk0YjJiNTQwMzlhNDZjNzljMmJkODkxZTA2NyIsInN1YiI6IjY1NWZhNWM5ODgwNTUxMDExZDMzNTljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rmkzxGJzMgVov93DK62z2yqiW6Y_Q9-ocpab_ehkg8A';
let movies = [];

const newMovie = () => {window.location.href = '../pages/newMovie.html';}

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + key_
    }
};

const getDetails = (id) => {
    fetch(fetch_path+id+'?language=pl-PL', options)
    .then(response => response.json())
    .then((myJson) => {
        let temp = myJson;
        let genres = [];
        setCookie("id", temp.id, 365);
        setCookie("title", temp.title, 365);
        setCookie("poster", path + temp.poster_path, 365);
        setCookie("overview", temp.overview, 365);
        setCookie("release_date", temp.release_date, 365);
        setCookie("runtime", temp.runtime, 365);
        setCookie("tmdb", tmdb_path+id, 365);
        for(let i = 0; i < temp.genres.length; i++) {
            genres.push(temp.genres[i].name);
        }
        setCookie("genres", genres , 365);
    })
    .catch(err => console.error(err));

    fetch(fetch_path+id+'/credits?language=en-US', options)
    .then(response => response.json())
    .then((myJson) => {
        let temp = myJson;
        let actors = [];
        for(let i = 0; i < 5; i++)
            actors.push(temp.cast[i].name);
        for(let i = 0; i < 1; i++)
            director = getDirector(temp.crew);
        setCookie("actors", actors, 365);
        setCookie("director", director[0].name, 365);
    })
    .catch(err => console.error(err));

    fetch(fetch_path+id+'/images', options)
    .then(response => response.json())
    .then((myJson) => {
        let gallery = [];
        myJson.backdrops.forEach(element => {
            gallery.push(element.file_path);
        });
        setCookie("gallery", gallery, 365);
    })
    .catch(err => console.error(err));

    fetch(fetch_path+id+'/reviews?language=en-US', options)
    .then(response => response.json())
    .then((myJson) => {
        let score = 0;
        let ratingCount = myJson.results.length;
        myJson.results.forEach(element => {
            score += element.author_details.rating;
        });
        score = (score == 0) ? score : parseFloat((score/ratingCount).toFixed(2));
        setCookie("ratingScore", score, 365);
        setCookie("ratingVotes", ratingCount, 365);
    })
    .catch(err => console.error(err));

    fetch(fetch_path+id+'/videos?language=en-EN', options)
    .then(response => response.json())
    .then((myJson) => {
        let links = getTrailer(myJson.results);
        setCookie("trailer", 'https://www.youtube.com/embed/'+links[0].key, 365);
        window.location.href = '../pages/info.html?='+getCookie('title')+''
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
const getTrailer = (list) => list.filter(list => list.name.includes('Official Trailer') || list.name.includes('Official'));
const getDirector = (list) => list.filter(list => list.job == 'Director');


// https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}