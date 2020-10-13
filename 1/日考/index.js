function fun(arr) {
    return [...new Set(arr)]
}


console.log(fun([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3]))