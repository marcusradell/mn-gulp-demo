require('angular')

angular.module('app', []).controller('appController', function($scope){
  $scope.app = {
    test: 'Hulk sleepy!'
  }
})
