var angular = require('angular');

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
