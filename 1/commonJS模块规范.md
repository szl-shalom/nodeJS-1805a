# commonJS规范
- 引入规范
```javascript
    var result = require("相对路径")
```

- 抛出规范
- 以最后一次抛出的module.exports为准
- exports 是module.exports的引用
- 模块系统的抛出是值的抛出或者叫静态抛出
```javascript
    module.exports = 值
```