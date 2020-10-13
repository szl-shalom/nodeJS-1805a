let username = document.querySelector(".username"),
    password = document.querySelector(".password"),
    submit = document.querySelector(".submit"),
    reset = document.querySelector(".reset");



//重置点击事件
reset.addEventListener("click", () => {
    username.value = "";
    password.value = "";
})
// 登录函数
function userLogin() {
    axios.post("/api/login", {
        username: username.value,
        password: password.value
    }).then(result=>{
        if(result.data.code){
            alert(result.data.mess)
        }else{
            alert(result.data.mess)
        }
    })
}

// 登录点击事件
submit.addEventListener("click", userLogin);
// 添加回车事件
document.addEventListener("keydown", (e) => {
    // keyCode值是13说明按下了回车  
    if (e.keyCode === 13) {
        userLogin()
    }
})