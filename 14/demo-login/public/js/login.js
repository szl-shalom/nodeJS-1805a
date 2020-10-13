let username = document.querySelector(".username"),
    password = document.querySelector(".password"),
    loginBtn = document.querySelector(".login-btn");
console.log(username, password, loginBtn)

// 登录
loginBtn.addEventListener("click", () => {
    axios.post("/api/login", {
        username: username.value,
        password: password.value,
    }).then(result => {
        if (result.data.code) {
            location.href = "./index.html"
        } else {
            alert("账户密码不正确")
        }
    })
})