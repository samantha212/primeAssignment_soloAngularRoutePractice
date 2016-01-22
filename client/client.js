/**
 * Created by samanthamusselman on 1/21/16.
 */
var app = angular.module('candidateApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/sanders', {
            templateUrl: 'views/sanders.html',
            controller: 'SandersController'
        })
        .when('/clinton', {
        templateUrl: 'views/clinton.html',
        controller: 'ClintonController'
        })
        .when('/rubio', {
        templateUrl: 'views/rubio.html',
        controller: 'RubioController'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);

app.controller('SandersController', ['$scope', function($scope){

}]);

app.controller('ClintonController', ['$scope', function($scope){

}]);

app.controller('RubioController', ['$scope', function($scope){

}]);
