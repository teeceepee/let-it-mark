var UglifyJS = require('uglify-js');

var input_file = process.argv[2];
if (input_file) {
  var minified = UglifyJS.minify(process.argv[2]);
  var output = 'javascript:(function(){' + minified.code + '})();';
  console.log(output);
}
