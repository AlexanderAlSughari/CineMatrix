const fs = require('fs');
const addMovie = () => {
    let movie = {
        id: Date.now(),
        poster_path: document.getElementById('poster_path').value,
        title: document.getElementById('title').value,
        release_date: document.getElementById('release_date').value,
        runtime: document.getElementById('runtime').value,
        genres: document.getElementById('genres').value,
        overview: document.getElementById('overview').value,
        production_countries: document.getElementById('production_countries').value,
        budget: document.getElementById('budget').value
    }
    movies.push(movie);

    const content = "movies";
    fs.writeFile('js\\movies.txt', content, err => {
        if(error) {
            console.err;
            return;
        }
    })
}