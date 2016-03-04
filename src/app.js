'use strict';

var app = angular.module('movieApp', [
    'ui.bootstrap',
    'ngRoute',
    'ngResource',
    'app.controllers',
    'app.services'
]).config(function ($routeProvider) {
    $routeProvider
        .when('/results', {
            templateUrl: 'views/results.html',
            controller: 'ResultsController as vm'
        })
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController as vm'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

angular.module("app.controllers", []);
angular.module("app.services", []);



