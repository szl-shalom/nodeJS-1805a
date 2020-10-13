const gulp = require("gulp");
const webserver = require("gulp-webserver");

gulp.task("default", () => {
    gulp.src("public").pipe(webserver({
        port: 3000,
        livereload: true,
        proxies: [{
            source: '/api/list',
            target: 'http://localhost:4444/api/list',
        }]
    }))
})