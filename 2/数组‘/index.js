// // let arr1 = [1, 2, 3];
// // let arr2 = [3, 4, 5];
// // let arr3 = [...arr1, ...arr2]
// // console.log(arr3)
// // let a = 1;
// // let b = 2;
// // [a, b] = [b, a];
// // console.log(a, b)


// // console.log(Object instanceof Array)


// // let obj = {
// //     2: "a",
// //     length: 2
// // }
// // let arr = Array.from(obj) 
// // arr.push("b")
// // console.log(arr)

// let obj2 = {
//     sex: "123"
// }
// let obj = {};


// let obj1 = {
//     name: "张三"
// }


// obj1[obj] = 1;
// obj1[obj2] = 2;

// console.log(obj1)


// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].copyWithin(0, 3, 5))

// [4, 5 ,3, 4, 5, 6, 7, 8, 9]


// let arr = [{
//     name: "张三",
//     age: 18
// }, {
//     name: "李四",
//     age: 22,
// }];


// let res = arr.findIndex(item => {
//     return item.name === "李四"
// })

// console.log(res)



//  fill

// let arr = [];
// arr.length = 10;
// arr.fill("a", 1, 5)
// console.log(arr)

// includes
// let arr = "12345"
// console.log(arr.includes("6"))
// 模糊搜索   
// let arr = [{
//     name: "张三"
// }, {
//     name: "李四"
// }, {
//     name: "小张"
// }]

// console.log(
//     arr.filter(item => {
//         return item.name.includes("张")
//     })
// )



// flat
// let arr = [1, [2, [3, [4, [5, [6, [7]]]]]]]
// console.log(arr.flat(Infinity))

// const flat = arr => {
//     let result = [];
//     const fun = (arr) => {
//         arr.forEach(item => {
//             // 判断是不是一个数组
//             if (Array.isArray(item)) {
//                 // 递归调用
//                 fun(item)
//             } else {
//                 result.push(item)
//             }
//         })
//     }
//     fun(arr)
//     return result;
// }

// function flattenDeep(arr1) {
//     return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
// }

// console.log(flattenDeep([1, [2, [3, [4, [5, [6, [7]]]]]]]))




// let arr = [{
//     age: 22
// }, {
//     age: 12
// }, {
//     age: 2
// }];

// let res = arr.reduce((p, n) => {
//     return p + n.age
// },0)
// console.log(res)

// // P 0   N { age:22 }     return 22
// // p 22  n  { age:12  }   return 34
// // p 34  n { age:2 }  retuen 36


// console.log([1, [2, 3]].flatMap(x => x * 2))