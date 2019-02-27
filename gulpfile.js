const {src, dest, task, series, watch} = require ('gulp')
const rm = require( 'gulp-rm' )
const sass = require ("gulp-sass");
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const px2rem = require('gulp-smile-px2rem');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');
const gulp = require('gulp');
const inlineFonts = require('gulp-inline-fonts');

sass.compiler = require ("node-sass");

task( 'clean',() => {
    return src( 'dist/**/*', { read: false }).pipe( rm() )
  });

task( 'copy:html',() =>{
    return src('src/*.html').pipe(dest('dist')).pipe(reload({stream:true}))
});
const style = [
    "node_modules/normalize.css/normalize.css",
    "src/style/main.scss"
];

task ('style',() =>{
    return src(style)
    .pipe(sourcemaps.init())
    .pipe(concat('main.scss'))
    .pipe(sassGlob())
    .pipe(sass().on("error", sass.logError))
    .pipe(px2rem())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    //.pipe(gcmq())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(dest("dist"))
});


task('scripts', ()=> {
    return src("src/scripts/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))

    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(dest("dist"))
});

task('svg', () => {
    return src("src/img/svg/*.svg")
.pipe(svgo({

    plugins:[{
       removeAttrs:{
       arrrs:"(fill|stroke|style|width|height|data.*)"
       }
    }
       
    ]

}))

.pipe(svgSprite({
    mode:{
        sprite:"../sprite.svg"
    }
}))
.pipe(dest("dist/img/svg"))


})

task('image', () => {
    return src("src/image/*.{png,jpg,gif,svg}")
    .pipe(dest("dist/image"));
})

task('fonts', () => {
    return src("src/fonts/*.{woff,woff2}")
    .pipe(dest("dist/fonts"));
})

task('fonts', function() {
    return gulp.src(['fonts/*'])
      .pipe(inlineFonts({ name: 'fonts' }))
      .pipe(dest('dist/fonts/'));
  });


task('server', () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});


watch("./src/style/**/.*scss", series("style"));
watch("./src/*.html", series("copy:html"));
watch("./src/scripts/*.js", series("scripts"));
watch("./src/img/svg/*.svg", series("svg"));
task("default", series("clean","copy:html", "style","scripts","svg","image","fonts", "server"));

