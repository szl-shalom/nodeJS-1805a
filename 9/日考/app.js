const fs = require("fs");
const path = require("path")

fs.writeFileSync("script.min.js", fs.readdirSync("src").reduce((p, n) => {
    return path.extname(n) ? p + fs.readFileSync(path.join("src", n)) : p;
}, ""))