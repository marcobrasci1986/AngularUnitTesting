'use strict';

var app = angular.module('movieApp', [
    'ui.bootstrap',
    'ngRoute',
    'ngResource',
    'app.controllers',
    'app.services',
    'app.directives',
    'app.filters',
    'ngMockE2E'
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
}).config(function ($logProvider) {
    $logProvider.debugEnabled(true);
}).run(function ($httpBackend) {
    var data = ['tt0076759', 'tt0080684', 'tt0086190'];
    var headers = {
        headers: {'Content-Type': 'application/json'}
    };

    // when popular is in Request return this mocked data
    $httpBackend.whenGET(function (s) {
        return (s.indexOf('popular') !== -1);
    }).respond(200, data, headers);

// allow all other real requests to passThrough as usual
    $httpBackend.whenGET(/.*/).passThrough();
});

// define all modules
angular.module("app.controllers", []);
angular.module("app.services", ['ngResource']);
angular.module("app.directives", []);
angular.module("app.filters", []);



