/*
 * @Author: your name
 * @Date: 2020-07-30 10:40:11
 * @LastEditTime: 2020-07-30 11:20:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \1805A\15\demo\mock\data.js
 */
const Mock = require('mockjs')
const fs = require('fs')
let data = Mock.mock({
    'list|5-15': [{
        username: '@cname',
        "age|18-22": 1,
        url: '@image(50x50,@color)',
        id: '@id'
    }]
})
fs.writeFileSync('data.json', JSON.stringify(data.list))

// {
//     username:"",
//     age:"",
//     url:"",
//     id:"",
// }