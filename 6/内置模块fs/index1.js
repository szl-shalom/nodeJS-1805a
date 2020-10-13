const fs = require("fs");



// 文件夹的操作

// 1、创建文件夹
// fs.mkdirSync(dirname)
// fs.mkdir(dirname,callback)

// 2、删除非空文件夹
// fs.rmdir(dirname,callback)
// fs.rmdirSync(dirname)
//  注意：文件夹必须是空的 


// 3、读取文件夹的目录结构  返回数组 数组放着每一个文件的名称
// fs.readdirSync(dirname)
// fs.readdir(dirname, callback)

// let arr = fs.readdirSync("hh")
// console.log(arr)

// 4、获取文件的信息 
// fs.statSync(path)  返回文件的描述信息
//          属性 size 返回文件的大小 单位字节b
//          方法：isFile() 是文件返回true 不是文件返回false