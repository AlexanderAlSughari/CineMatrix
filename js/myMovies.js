const showMyMovies = () => {
    console.log(getCookie('myMovie'));
}
document.onload = showMyMovies();