// 1、Promise 是一个构造函数，其实是一个类
// 2、Promise 有三种状态   pedding(进行中)    fulfilled (成功)  rejected(失败)
// 3、Promise 可以改变状态   pedding  => fulfilled     pedding => rejected 
// 4、Promise 一旦状态发生了改变  不可以改变
// 5、Promise 有实例方法 then  catch  finally

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(456);
//     }, 2000)
// })

// console.log(p1)
// p1.then((num) => {
//     console.log(num)
// }, (err) => {
//     console.log(err)
// })


// 异步加载图片
let urls = [
    "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=20065882,4184823739&fm=26&gp=0.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594880883854&di=79292bed91b61c8768b462e3e2158a2b&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fkid%2Fpics%2Fhv1%2F185%2F110%2F2196%2F142823135.jpg",
    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3139944264,58746346&fm=26&gp=0.jpg",
    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1820545127,3012673259&fm=26&gp=0.jpg",
]

function loadImage(url) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = url;
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            reject("失败了")
        }
    })
}

urls.forEach(item => {
    loadImage(item).then(img=>{
        document.body.append(img)
    })
})