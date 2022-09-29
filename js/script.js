"use strict";

const numberOfFilms = +prompt ("Сколько вы посмотрели фильмов?");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из просмотреных фильмов?', ''),
    b = prompt('Какая оценка?',''),
    c = prompt('Один из просмотреных фильмов?', ''),
    d = prompt('Какая оценка?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

