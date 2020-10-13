{ //为了变量冲突  在外开启一个作用域
    let username = document.querySelector(".r-username"),
        password = document.querySelector(".r-password"),
        repPassword = document.querySelector(".rr-password"),
        code = document.querySelector(".code"),
        register = document.querySelector(".r-register"),
        getCode = document.querySelector(".getCode");

    // 注册点击事件
    register.addEventListener("click", () => {
        // 两次密码是否一致
        if (password.value !== repPassword.value) {
            alert("两次密码输入不一致，请重新输入");
            return;
        }

        // 发送数据
        axios.post("/api/register", {
            username: username.value,
            password: password.value,
            code: code.value
        }).then(result=>{
            alert(result.data.mess)
        })
    })


    // 验证码点击事件
    getCode.addEventListener("click", () => {
        axios.get("/api/getCode").then(result => {
            result.data.code && console.log("验证码OK!!")
        })
    })
}