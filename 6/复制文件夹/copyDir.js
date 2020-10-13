const fs = require("fs");
const path = require("path")
const copyDir = (sourcePath, targetPath) => {
    //简单的容错处理  抛出异常
    if (!fs.existsSync(sourcePath)) {
        throw new Error("源目录不存在" + sourcePath)
    }
    if (fs.existsSync(targetPath)) {
        throw new Error("目标目录已经存在" + targetPath)
    }
    // 新建目标目录文件夹 
    fs.mkdirSync(targetPath);
    // 读取源目录的目录
    let arr = fs.readdirSync(sourcePath)
    // 循环
    arr.forEach(item => {
        let midSourcePath = path.join(sourcePath, item),
            midTargetPath = path.join(targetPath, item);
        // 判断是文件   
        if (fs.statSync(midSourcePath).isFile()) {
            // 是文件
            fs.copyFileSync(midSourcePath,midTargetPath)
        } else {
            // 是文件夹
            copyDir(midSourcePath,midTargetPath)
        }

    })
}



copyDir("hh", "qq")