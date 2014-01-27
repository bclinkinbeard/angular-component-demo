var angular = require('angular');

module.exports = angular.module('demo-component', [])
  .constant('template', require('./template.html'))
  .directive('demoComponent', require('./DemoDirective'))
  .controller('DemoController', require('./DemoController'));
