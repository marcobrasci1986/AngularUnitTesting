(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('PopularMovieService', PopularMovieService);

    function PopularMovieService($q, $http) {
        var service = {};
        var results = ['tt0076759', 'tt0080684', 'tt0086190'];


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

})();