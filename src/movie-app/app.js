angular.module('movieApp', ['ui.bootstrap', 'ngRoute', 'app.services'])
    .config(function ($routeProvider) {
            $routeProvider
                .when('/results', {
                        templateUrl: 'movie-app/results.html',
                        controller: 'ResultsController as vm'
                })
                .otherwise({
                        redirectTo: '/'
                });
    });