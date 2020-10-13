// ES6 解构赋值
// 1、数组的解构赋值
//    一一对应原则
let [x, y, z = 3 /*设置默认值*/ ] = [1, 2, 44];
// console.log(x, y, z)
// 2、对象解构
let {
    name,
    age,
    sex = "男", //设置默认值
} = {
    name: "张三",
    age: 18,
    // sex: "女"
}
// console.log(name, age, sex)
// 3、字符串解构
let [a1, a2, a3, a4, a5] = "1234";
// console.log(a1, a2, a3, a4, a5)
// 4、对象+数组解构赋值
// 非常遗憾  这个p并不是一个变量  它代表一个模式
{
    let obj = {
        p: [
            "hello",
            {
                res: "world"
            }
        ]
    }
    let {
        p: [x, {
            res
        }]
    } = obj;

    console.log(x, res)
}
// 5、其他解构赋值
// ([] = {})  报错
// ({} = [])  不报错
function add([a, b, c = 3]) {
    return a + b + c
}
console.log(add([1, 2, 4]))