// 引入gulp
const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const gulpSass = require("gulp-sass");
const gulpCleanCss = require("gulp-clean-css")
const gulpRename = require("gulp-rename")
const gulpBabel = require("gulp-babel")
const gulpUglify = require("gulp-uglify");
const gulpWebserver = require("gulp-webserver");
const url = require("url");
// 发布任务  打包html
gulp.task("html", () => {
    return gulp.src("views/*.html") //读取
        .pipe(htmlmin({ //插件  压缩html
            collapseWhitespace: true
        }))
        .pipe(gulp.dest("public")) //写入
})

gulp.task("scss", () => {
    return gulp.src("views/scss/*.scss") //读取scss
        .pipe(gulpSass()) //使用gulp-sass 编译 scss
        .pipe(gulp.dest("public/css")) //写入css
        .pipe(gulpCleanCss({ //使用gulp-clean-css   压缩css
            compatibility: 'ie8'
        }))
        .pipe(gulpRename((path) => {
            path.basename += ".min"
        }))
        .pipe(gulp.dest("public/css")) //写入
})

gulp.task("js", () => {
    return gulp.src("views/js/*.js")
        .pipe(gulpBabel({ //使用babel处理高级语法 转化低级语法  
            presets: ["@babel/env"]
        }))
        .pipe(gulpUglify())
        .pipe(gulp.dest("public/js"))
})

gulp.task("build", gulp.parallel(["html", "scss", "js"]))

gulp.task("auto", () => {
    gulp.watch("views", gulp.parallel(["build"]))
})

gulp.task("server", () => {
    gulp.src("public")
        .pipe(gulpWebserver({
            livereload: true,
            directoryListing: false,
            open: true,
            middleware(req, res, next) {
                const pathname = url.parse(req.url, true).pathname;
                if (pathname === "/api/list") {
                    res.end("1")
                }
                next();
            }
        }))

})

gulp.task("default", gulp.parallel(["server", "auto"]))