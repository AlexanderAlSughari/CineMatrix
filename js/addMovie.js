const validate = () => {
    let posterPath = document.getElementById('poster_path').value;
    let title = document.getElementById('title').value;
    let releaseDate = document.getElementById('release_date').value;
    let runtime = document.getElementById('runtime').value;
    let genres = document.getElementById('genres').value;
    let overview = document.getElementById('overview').value;
    let productionCountries = document.getElementById('production_countries').value;
    let budget = document.getElementById('budget').value;

    if (!posterPath || !title || !releaseDate || !runtime || !genres || !overview || !productionCountries || !budget) {
        alert('Wszystkie pola muszą być uzupełnione!');
        return;
    }
};
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