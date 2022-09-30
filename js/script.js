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
    privat: false
};


function detectPersLvl() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов")
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель")
    } else if (personalMovieDB.count > 50) {
        console.log("Вы киноман!")
    }
}
detectPersLvl();

function rememberMyMovies() {
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
}
rememberMyMovies();

function writeYourGenres(genres) {
    for (let i=1; i<4;i++) {
        const que=prompt(`Ваш любимый жанр под номером ${i}`);
        genres[i-1]=que;
    }
}
writeYourGenres(personalMovieDB.genres);

function hiddenPrivat(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
hiddenPrivat(personalMovieDB.privat);