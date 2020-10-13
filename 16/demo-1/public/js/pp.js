let tbody = document.querySelector('tbody');

function getData() {
    axios.get("/api/list").then(result => {
        render(result.data)
    })
}


function render(data) {
    tbody.innerHTML = data.map(item => {
        return `<tr>
        <td>${item.username}</td>
        <td>${item.age}</td>
        <td>${item.height}</td>
        <td>${item.sex ? "男":"女"}</td>
        <td><b class="del" id="${item.id}">删除</b></td>
    </tr>`
    }).join('')
}



function addEvent() {
    tbody.onclick = (e) => {
        let tar = e.target;
        if (tar.className === "del") {
            axios.post("/api/delete", {
                id: tar.id,
            }).then(result=>{
                result.data.code && getData()
            })
        }
    }
}

getData()
addEvent()