const showMovie = () => {
    document.querySelector('.title').innerHTML = getCookie("title");
    document.querySelector('.poster_image').src = getCookie("poster");
    document.querySelector('.rating').innerHTML = '<i class="icon-star"></i>' + '&ensp;' + getCookie("ratingScore") + ' / 10 (głosy ' + getCookie("ratingVotes") + ')';
    document.querySelector('.release_date').innerHTML = getCookie("release_date");
    document.querySelector('.runtime').innerHTML = getCookie("runtime") + ' minut';
    document.querySelector('.director').innerHTML = 'Reżyser: ' + getCookie("director");
    document.querySelector('.overview').innerHTML = getCookie("overview");
    document.querySelector('.tmdb').innerHTML = '<a target="_blank" href='+getCookie("tmdb")+'>[TMDB]</a>';
    document.querySelector('.youtube').innerHTML = '<iframe src='+getCookie("trailer")+' width="420" height="315" frameborder="0" allowfullscreen></iframe>'
    printArrayValues(getCookie("genres").split(','), 'genres');
    printArrayValues(getCookie("actors").split(','), 'actors');
    printArrayValues(getCookie("gallery").split(','), 'gallery');
    
    let buttonSend = document.querySelector('.sender');
    buttonSend.setAttribute("onclick", "addRating("+getCookie('id')+", myRating.value)");
    
    let cookies = ['id', 'title', 'poster', 'release_date', 'ratingScore', 'ratingVotes', 'director', 'runtime', 'overview', 'tmdb', 'trailer', 'genres', 'actors','gallery'];
    cookies.forEach(element => {
        console.log(getCookie(element));
        document.cookie = ""+cookies[element]+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });
}

const printArrayValues = (list, name) => {
    for(let i = 0; i < list.length; i++) {
        let element = (name == 'gallery') ? document.createElement('img') : document.createElement('span');
        if(name == 'gallery') element.src = path + list[i];
        element.innerHTML = list[i];
        let class_name = (name == 'genres') ? '.genres' : ((name == 'actors') ? '.actors' : '.gallery');
        document.querySelector(class_name).appendChild(element);
    }
}

const addRating = (id, value) => {
    let options2 = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: 'Bearer ' + key_
        },
        body: '{"value":'+value+'}'
      };
      
      fetch('https://api.themoviedb.org/3/movie/'+id+'/rating', options2)
        .then(response => response.json())
        .then(response => console.log(response))
        .then(alert("Dodano ocenę!"))
        .catch(err => console.error(err));
}
document.onload = showMovie();