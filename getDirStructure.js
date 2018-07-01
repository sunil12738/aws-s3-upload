const x = {}
const walkSync = function(dir, filelist) {
  var fs = fs || require('fs'),
      files = fs.readdirSync(dir);
  filelist = [];
  x[dir] = []
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      walkSync(dir + '/' + file, filelist);
    }
    else {
      x[dir].push(file)
      filelist.push(file);
    }
  });
  return x;
};

module.exports = walkSync