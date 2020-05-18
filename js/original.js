
'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ' ');
// console.log(typeof (numberOfFilms));
// console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log(personalMovieDB.movies);
        console.log('record to the object successfully');
    } else {
        i--;
        console.log('record to the object error');
    }
}

/*==вариант написания условия с тернарным оператором==*/
const message = (personalMovieDB.count === '' || personalMovieDB.count < 10) ? 'Просмотрено довольно мало фильмов' :
    (personalMovieDB.count >= 10 && personalMovieDB.count < 30) ? 'Вы классический зритель' :
        (personalMovieDB.count >= 30) ? 'Вы киноман' : 'Произошла ошибка';


/*==вариант написания условия с if...else==*/
// let message;
// if (personalMovieDB.count === '' || personalMovieDB.count < 10) {
//     message = 'Просмотрено довольно мало фильмов';
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     message = 'Вы классический зритель';
// } else if (personalMovieDB.count >= 30) {
//     message = 'Вы киноман';
// } else {
//     message = 'Произошла ошибка';
// }

console.log('Вы посмотрели '  + personalMovieDB.count + ' фильмов, ' + message);


const options = {};