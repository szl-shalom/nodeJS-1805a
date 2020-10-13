// const ajax = (url, callback) => {
//     // 创建 http 对象
//     let xhr = new XMLHttpRequest();
//     // 打开链接
//     xhr.open("get", url)
//     // 发送请求
//     xhr.send()
//     // 监听状态
//     xhr.onreadystatechange = function () {
//         // 状态吗
//         if (xhr.status === 200 && xhr.readyState === 4) {
//             callback && callback(xhr.responseText)
//         }
//     }
// }

const fs = require("fs");
fs.renameSync("data.json", "1.json")