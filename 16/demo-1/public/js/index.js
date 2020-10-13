let username=document.querySelector(".username");
let password=document.querySelector(".password");
let login=document.querySelector(".login");
login.addEventListener("click",()=>{
    axios.post("/api/login",{
        username:username.value,
        password:password.value
    }).then(a=>{
        if(a.data.come){
            location.href = "index.html";
            localStorage.setItem("token",username.value)
        }else{
            alert("账户密码不正确")
        }
    })
})