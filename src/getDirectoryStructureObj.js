const dirStrObj = {}
const fs = require("fs")
const getDirectoryStructureObj = function(dir, filelist) {
  let files = null
  filelist = [];
  dirStrObj[dir] = []
  try {
    files = fs.readdirSync(dir);
  } catch (e) {
    if (e.code === "ENOTDIR") {
      //Not a directory
    }
  }
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      getDirectoryStructureObj(dir + '/' + file, filelist);
    }
    else {
      dirStrObj[dir].push(file)
      filelist.push(file);
    }
  });
  return dirStrObj;
};

module.exports = getDirectoryStructureObj