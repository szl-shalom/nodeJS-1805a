# 使用mockjs
- 下载 npm i mockjs -D
- 使用
```javascript
const Mock = require("mockjs");
const data = Mock.mock({
    "list|20": [{
        name: "@cname", //随机名称
        age: "@integer(18,25)", //随机整数 18-25整数
        id: "@id", //随机id
        url: "@image(200x100)", //随机图片
        flag: "@boolean", //随机布尔值
        title: "@ctitle", //随机标题
        word:"@cword"  //随便汉字
    }]
})

```