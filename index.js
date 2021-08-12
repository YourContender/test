let answer = prompt('quantity see films?');
let numberOfFilms = answer;

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [], 
    private: false
}

let a, b;
for (let i = 0; i < 2; i++) {
    res = prompt('first film?')
    a = res

    res1 = prompt('how stars?')
    b = res1

    personalMoviesDB.movies[a] = b
}

console.log(personalMoviesDB);