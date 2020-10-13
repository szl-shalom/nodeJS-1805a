class Dialog {
    constructor() {
        this.create();
    }
    create() {
        this.dialog = document.createElement("div");
        this.dialog.style = `
            background:rgba(0,0,0,.7);
            width:100%;
            height:100%;
            position:fixed;
            left:0;
            top:0;
        `
        this.dialog.innerHTML = `
            <input placeholder="请输入用户名">
            <button>确定</button>
            <button>取消</button>
        `
        document.body.appendChild(this.dialog)
        let btns = this.dialog.querySelectorAll("button"),
            ipt = document.querySelector("input");

        btns[0].onclick = () => {
            location.href = "./qita.html";
            localStorage.setItem("username",ipt.value)
        }
        btns[1].onclick = () => {
            this.dialog.remove()
        }



    }
}


new Dialog()