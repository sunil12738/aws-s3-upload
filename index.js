const dirStructure = require("./getDirStructure.js")
const awsUpload = require("./awsUpload.js")
const dirStr = dirStructure(process.argv[2])
console.log("dirStr")

let fileStatus = {
	uploaded: 0,
	errored: 0,
}

Object.keys(dirStr).forEach(function(data){
	dirStr[data].forEach(function(d) {
		console.log(d, data, fileStatus)
		awsUpload(d, data)
	})
})

console.log(fileStatus)