const getDirectoryStructureObj = require("./getDirectoryStructureObj.js")
const s3Upload = require("./s3Upload.js")
const awsConsts = require("./consts")

function upload(directoryName) {
  if (!(awsConsts.folderNameToUpload || directoryName)) {
    console.log("Cannot upload. Directory not specified")
    process.exit(1)
  }
  const directoryStructure = getDirectoryStructureObj(awsConsts.folderNameToUpload || directoryName)
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

module.exports = upload