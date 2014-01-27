var browserify = require('browserify'),
  shim = require('browserify-shim'),
  fs = require('fs'),
  partialify = require('partialify'),
  shimConfig = {
    angular: {
      path: __dirname + '/vendor/angular.js',
      exports: 'angular'
    }
  };

module.exports = (function () {
  var bundle = shim(browserify(), shimConfig);

  bundle.add('./app.js');

  bundle.transform(partialify);

  bundle.bundle({debug: true}).pipe(fs.createWriteStream('./dist/bundle.js'));
})();
