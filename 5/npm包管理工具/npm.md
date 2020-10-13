# npm 是nodeJS的包管理工具
# 配置指令
```javascript
   npm config list  查看npm配置信息
   cache => 全局缓存
   prefix => 全局安装路径
   registry => 镜像源
   
   npm config set cache 路径        设置全局缓存路径
   npm config set prefix 路径       设置全局路径
   npm config set registry 镜像源   设置镜像源

   npm config get cache 路径        获取全局缓存路径
   npm config get prefix 路径       获取全局路径
   npm config get registry 镜像源   获取镜像源

```
# 使用指令
- npm init -y  初始化包管理工具
```javascript
{
  "name": "demo",   //包的名字
  "version": "1.0.0", //版本号
  "main": "index.js", //入口文件
  "scripts": { // 可执行监本
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "", //作者
  "license": "ISC",  //许可证
  "keywords": [], //关键字
  "description": "" //描述信息
}
```
- npm install 包名 -g  全局下载
- npm install 包名 --save(-S)  本地安装 生产环境下载   pageage.json 添加依赖 dependencies 生产环境
- npm install 包名 --save-dev（-D） 本地安装 开发环境下载  pageage.json 添加依赖 devDependencies 开发环境
- npm install 会根据当前的pageage.json文件下载依赖

