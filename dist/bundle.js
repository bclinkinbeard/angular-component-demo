(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var angular = (window.angular);

angular.module('app', [])
  .directive('demoComponent', require('demo-component'))
  .controller('ParentController', function ($scope) {

    $scope.people = [
      { name: 'Ben' },
      { name: 'Hannah' },
      { name: 'Sophi' },
      { name: 'Jack' },
      { name: 'Henry' }
    ];

  });

},{"demo-component":3}],2:[function(require,module,exports){
'use strict';

module.exports = function DemoController ($scope) {

  $scope.showMessage = function () {
    alert('There are ' + $scope.list.length + ' items in the list');
  }

}

},{}],3:[function(require,module,exports){
'use strict';

module.exports = function () {

  return {
    restrict: 'E',
    scope: {
      list: '='
    },
    template: require('./template.html'),
    controller: require('./DemoController')
  };

};

},{"./DemoController":2,"./template.html":4}],4:[function(require,module,exports){
module.exports = '<div>\n  Static template content\n\n  <ul class="pList">\n    <li ng-repeat="item in list">{{ item.name }}</li>\n  </ul>\n\n  <button ng-click="showMessage()">Show Message</button>\n</div>\n';
},{}]},{},[1])