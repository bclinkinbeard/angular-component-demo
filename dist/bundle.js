(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var angular = (window.angular),
  comp = require('demo-component');

angular.module('app', [
    comp.name
  ])
  .controller('ParentController', function ($scope) {

    $scope.people = [
      { name: 'Ben' },
      { name: 'Hannah' },
      { name: 'Sophi' },
      { name: 'Jack' },
      { name: 'Henry' }
    ];

  });

},{"demo-component":4}],2:[function(require,module,exports){
'use strict';

module.exports = function DemoController ($scope) {

  $scope.showMessage = function () {
    alert('There are ' + $scope.list.length + ' items in the list');
  }

}

},{}],3:[function(require,module,exports){
'use strict';

var angular = (window.angular);

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

},{}],4:[function(require,module,exports){
var angular = (window.angular);

module.exports = angular.module('demo-component', [])
  .constant('template', require('./template.html'))
  .directive('demoComponent', require('./DemoDirective'))
  .controller('DemoController', require('./DemoController'));

},{"./DemoController":2,"./DemoDirective":3,"./template.html":5}],5:[function(require,module,exports){
module.exports = '<div>\n  Static template content\n\n  <ul>\n    <li ng-repeat="item in list">{{ item.name }}</li>\n  </ul>\n\n  <button ng-click="showMessage()">Show Message</button>\n</div>\n';
},{}]},{},[1])