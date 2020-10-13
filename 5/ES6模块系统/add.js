//  ES6 模块规范
const add = (a, b) => a + b;
const red = (a, b) => a - b;




// 抛出
export {
    add as a,
    red,  
}
// 默认抛出
export default 1;