var browserify = require('browserify'),
  shim = require('browserify-shim'),
  fs = require('fs'),
  brfs = require('brfs'),
  shimConfig = {
    angular: {
      path: __dirname + '/vendor/angular.js',
      exports: 'angular'
    }
  };

module.exports = function () {
  var bundle = shim(browserify(), shimConfig);

  bundle.add('./app.js');

  bundle.transform(brfs);

  bundle.bundle().pipe(fs.createWriteStream('./dist/bundle.js'));
}()
