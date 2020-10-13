let tbody = document.querySelector("tbody");

axios.get("/api/getData").then(result => {
    console.log(result)
    render(result.data)
})




function render(data) {
    tbody.innerHTML = data.map((item,index)=>{
        return `
        <tr>
            <td>${index+1}</td>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>
                <img src="${item.url}" alt="">
            </td>
            <td>
                删除
            </td>
        </tr>
        `
    }).join("")
}