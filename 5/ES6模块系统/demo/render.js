const render = (el, count) => {
    let str = "";
    for (let i = 0; i < count; i++) {
        str += `<li>${i}</li>`
    }
    el.innerHTML = str;
}

export { render }