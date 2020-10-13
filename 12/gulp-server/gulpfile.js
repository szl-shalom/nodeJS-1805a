const gulp = require("gulp");
const sass = require("gulp-sass");
const webserver = require("gulp-webserver");
const url = require("url")
const fs =require("fs");
gulp.task("build-html", () => {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("public"))
})

gulp.task("build-scss", () => {
    return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("public/css"))
})

gulp.task("build-js", () => {
    return gulp.src("src/js/*.js")
        .pipe(gulp.dest("public/js"))
})

gulp.task("build", gulp.parallel(["build-html", "build-scss", "build-js"]))


gulp.task("auto", () => {
    gulp.watch("src", gulp.parallel(["build"]))
})

gulp.task("webserver", () => {
    gulp.src("public").pipe(webserver({
        livereload: true,
        open: true,
        // 中间件
        middleware(req, res, next) {
            let pathname = url.parse(req.url, true).pathname
            // 处理接口  数据获取接口
            if(pathname === "/api/getData"){
                res.end(fs.readFileSync("mock/data.json"))
                return ;
            }
            // 继续下一个
            next()
        }
    }))
})


gulp.task("default", gulp.parallel(["auto", "webserver", "build"]))