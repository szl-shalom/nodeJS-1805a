const path = require("path")
// __dirname  代表当前文件所在的绝对路径(不包含文件本身)
// __filename 代表当前文件所在的绝对路径(包含文件本身)


// path.resolve() 返回当前文件的绝对路径
// path.resolve(path,path1,path2....) 返回当前文件所在的绝对路径和所有参数拼接之后的路径

// path.join() 返回相对路径
// path.join(path,path1,path2....)    返回当前文件所在的相对路径和所有参数拼接之后的路径

let pathname = "G:/八维/代码/1707B-JS上/1/index.html"

// path.extname(路径)  //返回路径的扩展名
// path.basename(路径) //返回最后一个路径
// path.parse(pathname)  //返回一个对象
// {
//     root: 'G:/',                             哪个盘符
//     dir: 'G:/八维/代码/1707B-JS上/1',         路径
//     base: 'index.html',                      文件
//     ext: '.html',                            扩展名
//     name: 'index'                            文件名称
// }





// let obj = {
//     root: 'G:/',
//     dir: 'G:/八维/代码/1707B-JS上/1',
//     base: 'index.html',
//     ext: '.html',
//     name: 'index'
// }
// console.log(path.format(obj))