const x = {}
const fs = require("fs")
const getDirectoryStructureObj = function(dir, filelist) {
  let files = null
  filelist = [];
  x[dir] = []
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
      x[dir].push(file)
      filelist.push(file);
    }
  });
  return x;
};

module.exports = getDirectoryStructureObj