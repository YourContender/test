let answer = prompt('quantity see films?');
let numberOfFilms;

if (answer !== '' && answer.length < 50) {  
    numberOfFilms = answer
} else {
    answer = prompt('enter again quantity see films?')
}

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [], 
    private: false
}

for (let i = 0; i < 2; i++) {
    const res = prompt('first film?'),
          res1 = prompt('how stars?');

    if (res != null && res1 != null && res != '' && res1 != '' && res.length <= 50) {
        personalMoviesDB.movies[res] = res1;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMoviesDB.count < 10) {
    console.log('many films');
} else if (personalMoviesDB.count > 10 && personalMoviesDB.count < 30) {
    console.log('classical');
} else {
    console.log('professional');
}

console.log(personalMoviesDB);