const gulp = require('gulp');
const { series, parallel } = require('gulp');

const antes1 = cb => {
    console.log('Tarefa antes 1');
    return cb();
}

const antes2 = cb => {
    console.log('Tarefa antes 2');
    return cb();
}

function copiar(cb) {
    //  gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])
    //  .pipe(gulp.dest('pastaB'))
    // //  .pipe(imagePelaMetade())
    // //  .pipe(imageEmpretoEBranco())
    gulp.src('pastA/**/*.txt')
    .pipe(gulp.dest('pastB'))
    return cb();
}

const fim = cb => {
    console.log('Tarefa FIM');
    return cb();
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
);
