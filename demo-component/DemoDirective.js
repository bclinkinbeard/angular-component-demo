'use strict';

var angular = require('angular');

module.exports = function DemoDirective ($compile, template) {

  return {
    scope: {
      list: '='
    },
    restrict: 'E',
    controller: 'DemoController',
    link: function (scope, element) {

      var el = angular.element(template);
      el = $compile(el)(scope);
      angular.element(element[0]).append(el);

    }
  };

};
