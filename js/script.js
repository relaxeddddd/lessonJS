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

if (personalMovieDB.count<10){
    console.log("Просмотрено довольно мало фильмов")
    }else if (personalMovieDB.count>10 && personalMovieDB.count<30){
        console.log("Вы классический зритель")
    }else if (personalMovieDB.count>50){
        console.log("Вы киноман!")
    }

for (let i=1; i<3;){
    const a = prompt( `${i} из просмотреных фильмов?`),
          b = prompt('Какая оценка?','');
          if ((a.length>5 || a.length<1) || (b.length>5 || b.length<1)) {
            i--;
          } else{
            personalMovieDB.movies[a] = b;
          }
          i++;
}

console.log(personalMovieDB);