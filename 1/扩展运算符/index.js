// 扩展运算符 ...


// 1、在数组中使用扩展运算符 
// 表示剩余的数组（Rest element must be last element）

let [a, c, ...b] = [1, 2, 3, 4, 5];
// console.log(a, b)


// 2、对象
// 扩展对象的时候，表示剩余没有解构的对象
// let obj = {
//     name: "张三",
//     age: 18,
//     sex: "男"
// }

// let {
//     name,
//     sex,
//     age,
//     ...aa
// } = obj;
// console.log(name, aa)


// let arr = [1, 2, 5, 1, 2, 7, 9, 5, -2];

// console.log(Math.min(...arr))