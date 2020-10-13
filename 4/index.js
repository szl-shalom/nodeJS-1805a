// 1         1   [1]
// 2         11   2   [2]
// 3         111  12  21  [3]
// 4         1111 112 121 211 22  [5]   
// 5         11111 1112 1121 1211 2111 212 221 122 [8] 


function fun(n) {
    if (n === 1 || n === 2) {
        return n
    }
    return fun(n - 1) + fun(n - 2)
}


let res = fun(7)
console.log(res)