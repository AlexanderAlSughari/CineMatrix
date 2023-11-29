fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(res => {
        return res.json();
    })
    .then((myJson) => {

        const moviesSection = document.querySelector('.movies');

        if (moviesSection) {
            myJson.results.slice(0,5).forEach(element => {

                let movieSection = document.createElement('section');
                movieSection.classList.add('movie');

                let moviePoster = document.createElement('img');
                moviePoster.src = path + element.poster_path;

                let movieTitle = document.createElement('h3');
                movieTitle.innerHTML = `Tytuł: ${element.title}`;

                let movieRating = document.createElement('p');
                movieRating.innerHTML = `Ocena: ${element.vote_average}`;

                movieSection.appendChild(movieTitle);
                movieSection.appendChild(movieRating);
                movieSection.appendChild(moviePoster)

                moviesSection.appendChild(movieSection);
            });
        } else {
            console.error('Nie udało się znaleźć sekcji na stronie.');
        }
    })
    .catch(error => console.log(error));

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=449', options)
    .then(res => {
        return res.json();
    })
    .then((myJson) => {

        const moviesSection = document.querySelector('.movies1');

        if (moviesSection) {
            const lowestRated = myJson.results.reverse().slice(0, 5);

            lowestRated.forEach(element => {

                let movieSection = document.createElement('section');
                movieSection.classList.add('movie');

                let moviePoster = document.createElement('img');
                moviePoster.src = path + element.poster_path;

                let movieTitle = document.createElement('h3');
                movieTitle.innerHTML = `Tytuł: ${element.title}`;

                let movieRating = document.createElement('p');
                movieRating.innerHTML = `Ocena: ${element.vote_average}`;

                movieSection.appendChild(movieTitle);
                movieSection.appendChild(movieRating);
                movieSection.appendChild(moviePoster)

                moviesSection.appendChild(movieSection);
            });
        } else {
            console.error('Nie udało się znaleźć sekcji na stronie.');
        }
    })
    .catch(error => console.log(error));
