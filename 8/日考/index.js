const fs = require("fs");
class readFile {
    constructor(path, encoding = "utf-8") {
        this.data = fs.readFileSync(path, encoding)
    }
}
console.log(new readFile("index.js").data);