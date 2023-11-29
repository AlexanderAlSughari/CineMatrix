const addMovie = () => {
    let title = document.getElementById('title').value;
    let releaseDate = document.getElementById('release_date').value;
    let runtime = document.getElementById('runtime').value;
    let genres = document.getElementById('genres').value;
    let overview = document.getElementById('overview').value;

    if (!title || !releaseDate || !runtime || !genres || !overview)
        alert('Wszystkie pola muszą być uzupełnione!');
    else {
        setCookie("myMovie", [title, releaseDate, runtime, genres, overview], 365);
    }
    console.log(getCookie("mineMovie"))
}