var application= angular.module("dashboard",[]);
application.controller('dashboardCtrl',function($scope,$http){
$scope.reload = function(){
$http.get('/new').then(function(response){
  $scope.data=response.data;
});
};
var historique = function(){
  $http.get('/api/values').then(function(response){
    $scope.values=response.data;

  });
};
historique();
});
