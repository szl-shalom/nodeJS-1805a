let register = document.querySelector(".register");




register.addEventListener("click", () => {
    axios.post("/api/register", {
        data: {
            username: username.value,
            password: password.value
        }
    }).then(result=>{
        result.data ? 
            alert("注册成功")
            :
            alert("此账户已经存在，请重新注册")
    })
})