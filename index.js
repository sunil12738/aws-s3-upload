const dirStructure = require("./getDirStructure.js")

const dirStr = dirStructure(process.argv[2])
console.log("process.argv")
// console.log(process.argv)
console.log("dirStr")
console.log(dirStr)
// console.log(dirStructure)