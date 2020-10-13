const url = require("url");

console.log(url.parse("http://localhost:8080/1231/1231/2312"))

// {
//     protocol: 'https:',  协议
//     slashes: true,
//     auth: null,
//     host: 'www.baidu.com',      主机地址
//     port: null,                  端口号
//     hostname: 'www.baidu.com',   主机名称
//     hash: null,                  哈希值（锚点）  #后面的数据
//     search: null,
//     query: null,                 传输的数据  ?后面的数据
//     pathname: '/',               访问的路径
//     path: '/',
//     href: 'https://www.baidu.com/'
//   }