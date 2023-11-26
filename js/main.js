const path = 'https://image.tmdb.org/t/p/original';
const key_ = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTc1Njk0YjJiNTQwMzlhNDZjNzljMmJkODkxZTA2NyIsInN1YiI6IjY1NWZhNWM5ODgwNTUxMDExZDMzNTljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rmkzxGJzMgVov93DK62z2yqiW6Y_Q9-ocpab_ehkg8A';
let movies = [];

const newMovie = () => {window.location.href = '../newMovie.html';}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + key_
  }
};