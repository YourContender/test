let answer;

const personalMoviesDB = {
    count: answer,
    movies: {},
    actors: {},
    genders: [], 
    private: false
}

function start() {
    answer = +prompt('quantity see films?');

    while (answer == '' || answer == null || isNaN(answer)) {
        answer = +prompt('quantity see films?');
    }

    personalMoviesDB.count = answer;
}
start();

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMoviesDB.count < 10) {
        console.log('many films');
    } else if (personalMoviesDB.count > 10 && personalMoviesDB.count < 30) {
        console.log('classical');
    } else {
        console.log('professional');
    }
}

detectPersonalLevel();

// if (personalMoviesDB.count < 10) {
//     console.log('many films');
// } else if (personalMoviesDB.count > 10 && personalMoviesDB.count < 30) {
//     console.log('classical');
// } else {
//     console.log('professional');
// }

// console.log(personalMoviesDB);


function showMyDB(value) {
    if (!value) {
        console.log('public object: ', personalMoviesDB);
    } else {
        console.log('private object');
    }
}
showMyDB(personalMoviesDB.private);

// function showMyDB(obj) {
//     for (let item in obj) {
//         if (item === 'private') {
//             obj[item] === false ? console.log('this public obj: ', obj) : null
//         } else {
//             continue
//         }  
//     }
// }
// showMyDB(personalMoviesDB)

function writeYourGenders() {
    for (let i = 1; i <= 3; i++) {
        let ans = prompt('favorite films');

        personalMoviesDB.genders.push(ans);
    }
}

writeYourGenders()