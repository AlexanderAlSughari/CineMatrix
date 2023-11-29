fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
.then(response => response.json())
.then((myJson) => {
    let i = 1;
    const moviesSection = document.querySelector('.movies-popularity');
    if (moviesSection) {
        let array = filterByPopularity(myJson.results).slice(0,5);
        array.forEach(element => {
            let movieSection = document.createElement('section');
            movieSection.classList.add('movie');
            movieSection.setAttribute("onclick", "getDetails("+element.id+")");

            let moviePoster = document.createElement('img');
            moviePoster.src = path + element.poster_path;

            let number = document.createElement('p');
            number.innerHTML = '#' +  i++;

            let movieTitle = document.createElement('h3');
            movieTitle.innerHTML = element.title;

            let movieRating = document.createElement('span');
            movieRating.classList.add('stats');
            movieRating.innerHTML = 'Popularność: ' + element.popularity;

            movieSection.appendChild(moviePoster);
            movieSection.appendChild(number);
            movieSection.appendChild(movieTitle);
            movieSection.appendChild(movieRating);

            moviesSection.appendChild(movieSection);
        })
    }
    else
        console.error('Nie udało się znaleźć sekcji na stronie.');
})
.catch(error => console.log(error));

fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
.then(response => response.json())
.then((myJson) => {
    let i = 1;
    const moviesSection = document.querySelector('.series-popularity');
    if (moviesSection) {
        let array = filterByPopularity(myJson.results).slice(0,5);
        array.forEach(element => {
            let movieSection = document.createElement('section');
            movieSection.classList.add('movie');

            let moviePoster = document.createElement('img');
            moviePoster.src = path + element.poster_path;

            let number = document.createElement('p');
            number.innerHTML = '#' +  i++;

            let movieTitle = document.createElement('h3');
            movieTitle.innerHTML = element.name;

            let movieRating = document.createElement('span');
            movieRating.innerHTML = 'Popularnność: ' + element.popularity;

            movieSection.appendChild(moviePoster);
            movieSection.appendChild(number);
            movieSection.appendChild(movieTitle);
            movieSection.appendChild(movieRating);

            moviesSection.appendChild(movieSection);
        });
    } else
        console.error('Nie udało się znaleźć sekcji na stronie.');
})
.catch(error => console.log(error));

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
.then(response => response.json())
.then((myJson) => {
    let i = 1;
    const moviesSection = document.querySelector('.movies-unpopularity');
    if (moviesSection) {
        let array = filterByUnpopularity(myJson.results).slice(0,5);
        array.forEach(element => {
            let movieSection = document.createElement('section');
            movieSection.classList.add('movie');

            let moviePoster = document.createElement('img');
            moviePoster.src = path + element.poster_path;

            let number = document.createElement('p');
            number.innerHTML = '#' +  i++;

            let movieTitle = document.createElement('h3');
            movieTitle.innerHTML = element.title;

            let movieRating = document.createElement('span');
            movieRating.innerHTML = 'Popularnność: ' + element.popularity;

            movieSection.appendChild(moviePoster);
            movieSection.appendChild(number);
            movieSection.appendChild(movieTitle);
            movieSection.appendChild(movieRating);

            moviesSection.appendChild(movieSection);
        });
    } else
        console.error('Nie udało się znaleźć sekcji na stronie.');
})
.catch(error => console.log(error));

fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
.then(response => response.json())
.then((myJson) => {
    let i = 1;
    console.log(myJson.results)
    const moviesSection = document.querySelector('.series-unpopularity');
    if (moviesSection) {
        let array = filterByUnpopularity(myJson.results).slice(0,5);
        array.forEach(element => {
            let movieSection = document.createElement('section');
            movieSection.classList.add('movie');

            let moviePoster = document.createElement('img');
            moviePoster.src = path + element.poster_path;

            let number = document.createElement('p');
            number.innerHTML = '#' +  i++;

            let movieTitle = document.createElement('h3');
            movieTitle.innerHTML = element.name;

            let movieRating = document.createElement('span');
            movieRating.innerHTML = 'Popularnność: ' + element.popularity;

            movieSection.appendChild(moviePoster);
            movieSection.appendChild(number);
            movieSection.appendChild(movieTitle);
            movieSection.appendChild(movieRating);

            moviesSection.appendChild(movieSection);
        });
    } else
        console.error('Nie udało się znaleźć sekcji na stronie.');
})
.catch(error => console.log(error));

const filterByPopularity = (list) => list.sort((a, b) => b.popularity - a.popularity);
const filterByUnpopularity = (list) => list.sort((a, b) => a.popularity - b.popularity);