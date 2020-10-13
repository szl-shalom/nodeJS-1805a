// ES6 规范
// 抛出
/**
 *  1、逐个抛出 
 * export 声明 名称
 * 举例：export const num = 1;
 *  2、一起抛出
 * export {  }
 * 3、默认抛出
 *  export default 值
 * 
 */
// 引入
/**
 *  import {  } from "js文件"
 *  
 *  // 这个result是默认抛出的值
 *  import result from "js文件"
 *  
 *  //引入模块系统所有抛出的数据   使用res存储
 *  import * as res from "js文件"
 */
//  注意
/**
 * 1、想要使用ES6模块系统 需要在引入的script标签上加上属性 type="module"
 * 2、需要在服务器环境运行  不能本地文件运行
 * 3、无论抛出还是引入 都可以起别名   语法  原名字 as 新名字
 * 
 * 
 */



import res,{a as b} from "./add.js"
console.log(res,b)