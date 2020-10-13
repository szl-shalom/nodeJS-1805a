/*
 * @Author: your name
 * @Date: 2020-07-30 10:56:00
 * @LastEditTime: 2020-07-30 11:41:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \1805A\15\demo\public\js\index.js
 */
let add = document.querySelector(".add"),
    search = document.querySelector(".search"),
    tbody = document.querySelector("tbody"),
    dialog = document.querySelector(".dialog"),
    username = document.querySelector(".username"),
    age = document.querySelector(".age"),
    submit = document.querySelector(".submit"),
    close = document.querySelector(".close"),
    isAdd = true, //规定  值为真  添加  为假是编辑
    modifyId = "";

// 渲染函数
function render(data) {
    tbody.innerHTML = data.map(item => {
        return `
        <tr>
            <td>${item.id}</td>
            <td>${item.username}</td>
            <td>${item.age}</td>
            <td>
                <img src="${item.url}"/>
            </td>
            <td>
                <b class="modify" id="${item.id}">编辑</b>
                <b class="del" id="${item.id}">删除</b>
            </td>
        </tr>
        `
    }).join("")
}

//访问接口渲染数据  /api/list接口
function getData() {
    // 获取数据
    axios.get("/api/list").then(result => {
        // 渲染数据
        render(result.data)
    })
}

// 事件
function addEvent() {
    tbody.addEventListener("click", (e) => {
        // 获取事件源
        let tar = e.target;
        // 判断类名是不是del
        if (tar.className === "del") {
            // 发起请求
            axios.post("/api/delete", {
                id: tar.id //删除的id
            }).then(result => {
                result.data.code && getData()
            })
        }
        // 判断是不是modify
        if (tar.className === "modify") {
            isAdd = false;
            dialog.style.display = "block";
            username.value = tar.parentNode.parentNode.children[1].innerHTML;
            age.value = tar.parentNode.parentNode.children[2].innerHTML;
            modifyId = tar.id;
        }
    })

    // 搜索输入事件
    search.addEventListener("input", () => {
        axios.post("/api/search", {
            searchValue: search.value,
        }).then(result => {
            render(result.data)
        })
    })

    // 新增点击事件
    add.addEventListener("click", () => {
        // 显示弹框
        dialog.style.display = "block";
        // 设置开关变量
        isAdd = true;
    })

    // 提交事件
    submit.addEventListener("click", () => {
        if (isAdd) {
            // 新增
            axios.post("/api/add", {
                username: username.value,
                age: age.value,
            }).then(result => {
                result.data.code && getData();
                dialog.style.display = "none";
            })
        } else {
            // 编辑
            axios.post("/api/modify", {
                username: username.value,
                age: age.value,
                id: modifyId,
            }).then(result => {
                result.data.code && getData();
                dialog.style.display = "none";
            })
        }

    })
}


// 初始化访问接口 渲染数据
getData();
// 事件
addEvent()