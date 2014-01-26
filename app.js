var comp = require('./demo-component');
var angular = require('angular');
var fs = require('fs');

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
