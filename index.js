const getDirectoryStructureObj = require("./getDirectoryStructureObj.js")
const awsUpload = require("./awsUpload.js")
const directoryStructure = getDirectoryStructureObj(process.argv[2])
console.log("dirStr")

let fileStatus = {
	uploaded: 0,
	errored: 0,
}

Object.keys(directoryStructure).forEach(function(fullFilePath){
	const filesInDir = directoryStructure[fullFilePath] || []
	if (filesInDir.length === 0) {
		awsUpload(null, fullFilePath)
	} else {
		directoryStructure[fullFilePath].forEach(function(fileName) {
			// console.log(fileName, fullFilePath)
			awsUpload(fileName, fullFilePath)
		})
	}
})

console.log(fileStatus)