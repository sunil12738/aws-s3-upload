const getDirectoryStructureObj = require("./getDirectoryStructureObj.js")
const s3Upload = require("./s3Upload.js")
const awsConsts = require("./consts")
const directoryStructure = getDirectoryStructureObj(awsConsts.folderNameToUpload)

function upload() {
  Object.keys(directoryStructure).forEach(function(fullFilePath){
    const filesInDir = directoryStructure[fullFilePath] || []
    //Create empty folder in case directory is empty
    if (filesInDir.length === 0) {
      s3Upload(null, fullFilePath)
    } else {
      directoryStructure[fullFilePath].forEach(function(fileName) {
        s3Upload(fileName, fullFilePath)
      })
    }
  })
}

upload()

module.exports = upload