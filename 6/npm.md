- 什么是npm ?   是nodeJS的包管理工具
- 怎么初始化  包管理工具 ?    npm init -y
- package.json  包的描述文件
- - main 入口文件
- - scripts 脚本
- - - start:"node index"     终端执行 npm run start
- 全局下载swiper  npm i swiper -g
- 本地开发环境下载swiper npm i swiper --save-dev(-D)
- 本地生产环境下载swiper npm i swiper --save(-S)


- npm config ls 查看当前的npm配置信息
- npm config set prefix(全局安装路径) || cache(全局缓存路径) || registry(镜像源)  设置
- npm config get prefix(全局安装路径) || cache(全局缓存路径) || registry(镜像源)  获取


<!-- 内置模块  fs http path url  -->