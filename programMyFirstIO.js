
var fs = require('fs')

newLines = fs.readFileSync(process.argv[2]).toString().split("\n").length - 1

console.log(newLines)
