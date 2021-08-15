const personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genders: [], 
    private: false,

    start: function() {
        this.count = +prompt('quantity see films?');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('quantity see films?');
        }
    
        personalMoviesDB.count = this.count;  
    },

    rememberMyFilms: function() {
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
    },

    detectPersonalLevel: function() {
        if (personalMoviesDB.count < 10) {
            console.log('many films');
        } else if (personalMoviesDB.count > 10 && personalMoviesDB.count < 30) {
            console.log('classical');
        } else {
            console.log('professional');
        }
    },

    showMyDB: function() {
        if (!this.private) {
            console.log('public object: ', personalMoviesDB);
        } else {
            console.log('private object');
        }
    },

    writeYourGenders: function() {
        for (let i = 1; i < 2; i++) {
            let ans = prompt('favorite category films list: ');

            if (ans === '' || ans === null) {
                console.log('don`t correct data');
                i--;
            } else {
                personalMoviesDB.genders = ans.split(', ');
            }

        }

        personalMoviesDB.genders.forEach((item, index) => {
            console.log(`${index + 1}: favorite ${item}`);
        })
    },

    toggleVisibleMyDB: function() {
        if (!this.private) {
            this.private = true
        } else {
            this.private = false
        }
    }
}


personalMoviesDB.start();
personalMoviesDB.rememberMyFilms();
personalMoviesDB.detectPersonalLevel();
personalMoviesDB.showMyDB();
personalMoviesDB.writeYourGenders();
personalMoviesDB.toggleVisibleMyDB();


