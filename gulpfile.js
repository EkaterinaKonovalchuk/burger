const {src, dest, task} = require ('gulp')
const rm = require( 'gulp-rm' )
const sass = require ("gulp-sass");

sass.compiler = require ("node-sass");

task( 'clean',() => {
    return src( 'dist/**/*', { read: false }).pipe( rm() )
  })

task( 'copy',() =>{
    return src('src/style/*.scss').pipe(dest('dist'))
});
const style = [
    "node_modeles/normalize.css/normalize.css",
    "src/style/main.scss"
];

task ('style',() =>{
    return src(style)
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("dist"))
});

task("default", series("clean", "style"));

