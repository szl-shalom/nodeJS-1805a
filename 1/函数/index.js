// 1、函数默认值
function fun({
    a,
    b = 2
} = {
    a: 1
}) {
    // console.log(a, b)
}

fun({
    a: 3,
    b: 4
})


// 2 函数的length
// 返回形参的个数
// function f([a, b, c]) {}
// console.log(f.length)


// 3、函数的扩展运算
function f1(...a) {
    console.log(a)
}

f1(1, 2, 3, 4, 5)

// *********************    ！！！！！！！  箭头函数  ！！！！！！！    *****************