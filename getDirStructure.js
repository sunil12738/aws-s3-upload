const x = {}
const walkSync = function(dir, filelist) {
  var fs = fs || require('fs'),
      files = fs.readdirSync(dir);
  filelist = filelist || [];
  x[dir] = []
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      // console.log("dir, file, filelist")
      // console.log(dir, file, filelist)
      filelist = walkSync(dir + '/' + file, filelist);
    }
    else {
      // console.log("file")
      // console.log(file)
      x[dir].push(file)
      filelist.push(file);
    }
  });
  console.log("x")
  console.log(x)
  return filelist;
};

module.exports = walkSync