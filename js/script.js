"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько вы посмотрели фильмов?");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько вы посмотрели фильмов?");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    detectPersLvl: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов")
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель")
        } else if (personalMovieDB.count > 50) {
            console.log("Вы киноман!")
        }
    },
    rememberMyMovies: function () {
        for (let i = 1; i < numberOfFilms + 1;) {
            const a = prompt(`${i} из просмотреных фильмов?`),
                b = prompt('Какая оценка?', '');
            if ((a.length > 5 || a.length < 1) || (b.length > 5 || b.length < 1)) {
                i--;
            } else {
                personalMovieDB.movies[a] = b;
            }
            i++;
        }
    },
    writeYourGenres: function (genres) {
        // for (let i = 1; i < 4; i++) {
        //     let que = prompt(`Ваш любимый жанр под номером ${i}`);

        //     if (que === null || que === '') {
        //         console.log("Вы ввели некоректные данные");
        //         i--;
        //     } else {
        //         genres[i - 1] = que;
        //     }
        // }

        let que = prompt("Введите ваши любимы жанры через запятую");

        if (que === null || que === '') {
            console.log("Вы ввели некоректные данные");
            i--;
        } else {
            genres = que.split(',');
            genres.sort();
        }

        genres.forEach(function (item, i) {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        })

    },
    hiddenPrivat: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toogleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = true
        } else {
            personalMovieDB.privat = false;
        }
    }

};

personalMovieDB.detectPersLvl();
personalMovieDB.rememberMyMovies();
personalMovieDB.writeYourGenres(personalMovieDB.genres);
personalMovieDB.hiddenPrivat(personalMovieDB.privat);
personalMovieDB.toogleVisibleMyDB(personalMovieDB.privat);


// function detectPersLvl() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов")
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель")
//     } else if (personalMovieDB.count > 50) {
//         console.log("Вы киноман!")
//     }
// }
// detectPersLvl();

// function rememberMyMovies() {
//     for (let i = 1; i < numberOfFilms + 1;) {
//         const a = prompt(`${i} из просмотреных фильмов?`),
//             b = prompt('Какая оценка?', '');
//         if ((a.length > 5 || a.length < 1) || (b.length > 5 || b.length < 1)) {
//             i--;
//         } else {
//             personalMovieDB.movies[a] = b;
//         }
//         i++;
//     }
// }
// rememberMyMovies();

// function writeYourGenres(genres) {
//     for (let i=1; i<4;i++) {
//         const que=prompt(`Ваш любимый жанр под номером ${i}`);
//         genres[i-1]=que;
//     }
// }
// writeYourGenres(personalMovieDB.genres);

// function hiddenPrivat(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// hiddenPrivat(personalMovieDB.privat);