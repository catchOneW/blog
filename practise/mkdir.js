var fs = require('fs')
var dirName = process.argv[2] // 你传的参数是从第 2 个开始的
var dir = "./" + dirName;
fs.mkdirSync(dir) // mkdir $1
fs.mkdirSync(dir + '/css') // mkdir css
fs.mkdirSync(dir + '/js') // mkdir js
fs.writeFileSync(dir+"/index.html", "<!DOCTYPE><title>Hello</title><h1>Hi</h1>")
fs.writeFileSync(dir+"/css/style.css", "h1{color: red;}")
fs.writeFileSync(dir+"/js/main.js", "var string = \"Hello World\"alert(string)")
process.exit(0)