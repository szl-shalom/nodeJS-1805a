# gulp 使用
- npm i gulp-cli -g（只需要第一次使用安装一次）
- npm i gulp -D

# gulp的方法
- gulp.task("任务名称",回调函数)  开启任务
- gulp.src("路径")  读取的路径
- gulp.pipe(gulp.desk("路径")) 使用管道流输出文件 
- gulp.watch("路径",回调函数)
- gulp.parallel(["任务1"，"任务二"])  任务并发一起执行
- gulp.series(["任务1"，"任务二"])  任务依次执行执行

# gulp插件
- gulp-htmlmin      压缩html
- gulp-sass         编译sass|scss 转化 css
- gulp-clean-css    压缩css
- gulp-babel  @babel/core @babel/preser-env  es6+ 转化 es3 + es5
- gulp-uglify       压缩js
- gulp-rename       修改名字
- gulp-concat       合并文件
- gulp-imagemin     压缩图片
- gulp-webserver    服务器
- 怎么用？  =>下载  =>去node_modules下面找到对应的包名  =>寻找 README.md文件

