angular.module('fnfApp', [])
    .controller('emailController', ['$scope', '$http', 'HttpSender', function($scope, $http, HttpSender) {
      $scope.request = {};
      $scope.request.email = "";
      $scope.submitted = false;
      $scope.submit = function() {
        if ($scope.request.email) {
          HttpSender.send($scope.request).success(function() {
              $scope.submitted = true;
          });
        }
      };
    }]);

angular.module('fnfApp')
  .factory('HttpSender', ['$http', '$httpParamSerializerJQLike', function($http, $httpParamSerializerJQLike) {
    return {
      send: function(data) {
           return $http({method:'POST', url:'/', data : $httpParamSerializerJQLike(data), headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'}}); 
      }
    }
  }])


angular.module('fnfApp')
    .controller('messageController', ['$scope', '$http', 'HttpSender', function($scope, $http, HttpSender) {
      $scope.request = {};
      $scope.request.email = "";
      $scope.request.phone = "";
      $scope.request.name = "";
      $scope.request.message = "";
      $scope.submitted = false;
      $scope.submit = function() {
        if ($scope.request.email && $scope.request.message) {
          HttpSender.send($scope.request).success(function() {
              $scope.submitted = true;
          });
        }
      };
    }]);
