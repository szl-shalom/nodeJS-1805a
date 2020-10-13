let username = document.querySelector(".username");
let num = document.querySelector(".num");
let url = document.querySelector(".url");
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    axios.post("/api/address/add", {
        user: username.value,
        tel: num.value,
        address: url.value
    }).then((a) => {
        if (a.data.code) {
            location.href = 'address.html';
        }
    })
})