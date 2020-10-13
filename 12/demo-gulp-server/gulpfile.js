const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const sass = require("gulp-sass");
const cleanCss = require("gulp-clean-css");
const webserver = require("gulp-webserver");
// 任务  html  
gulp.task("html", () => {
    return gulp.src("src/*.html")
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest("public"))
})

// 任务 css
gulp.task("scss", () => {
    return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(cleanCss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest("public/css"))
})
// 任务 js
gulp.task("js", () => {
    return gulp.src("src/js/*.js")
        .pipe(gulp.dest("public/js"))
})

// 任务 build 打包 scss js html
gulp.task("build", gulp.parallel(["html", "scss", "js"]))


// 任务 自动化 auto

gulp.task("auto", () => {
    gulp.watch("src", gulp.parallel(["build"]))
})


// 任务  server服务
gulp.task("server", () => {
    gulp.src("public")
        .pipe(webserver({
            livereload: true,
            port: 8080,
            open:true
        }))
})

// 默认任务 
gulp.task("default", gulp.parallel(["auto", "server", "build"]))