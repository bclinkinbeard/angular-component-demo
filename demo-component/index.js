var angular = require('angular'),
  fs = require('fs');

module.exports = angular.module('demo-component', [])
  .constant('template', require('fs').readFileSync(__dirname + '/template.html'))
  .directive('demoComponent', require('./DemoDirective'))
  .controller('DemoController', require('./DemoController'));
