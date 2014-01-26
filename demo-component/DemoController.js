'use strict';

module.exports = function DemoController ($scope) {

  $scope.showMessage = function () {
    alert('There are ' + $scope.list.length + ' items in the list');
  }

}
