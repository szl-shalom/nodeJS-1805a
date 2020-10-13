let username = document.querySelector(".username"),
    password = document.querySelector(".password"),
    login = document.querySelector(".login");


login.addEventListener("click", () => {
    axios.post("/api/login", {
        data: {
            username: username.value,
            password: password.value
        }
    }).then(result => {
        result.data ? location.href = "./index.html" : alert("账户不正确")
    })
})