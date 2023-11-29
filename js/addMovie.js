const addMovie = () => {
    let title = document.getElementById('title').value;
    let releaseDate = document.getElementById('release_date').value;
    let runtime = document.getElementById('runtime').value;
    let genres = document.getElementById('genres').value;
    let overview = document.getElementById('overview').value;

    if (!title || !releaseDate || !runtime || !genres || !overview)
        alert('Wszystkie pola muszą być uzupełnione!');
    else {
        document.cookie = "mymovie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setCookie("myMovie", [title, releaseDate, runtime, genres, overview], 365);
    }
    console.log(new Array(getCookie('myMovie').split(',')));
}