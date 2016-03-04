(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('PopularMovieService', PopularMovieService);

    function PopularMovieService($q, $http) {
        var service = {};
        var results = [
            {
                "Title": "Star Wars: Episode IV - A New Hope",
                "imdbID": "tt0076759"
            },
            {
                "Title": "Star Wars: Episode V - The Empire Strikes Back",
                "imdbID": "tt0080684"
            },
            {
                "Title": "Star Wars: Episode VI - Return of the Jedi",
                "imdbID": "tt0086190"
            }
        ];

        function httpPromise() {
            var deferred = $q.defer();
            deferred.resolve(results);
            return deferred.promise;
        }


        service.findPopularMovies = function () {
            return httpPromise();
        };

        return service;
    }

})()