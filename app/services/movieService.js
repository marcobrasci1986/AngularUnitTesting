(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('MovieService', MovieService);


    function MovieService($http, $q) {
        var service = {};
        var baseUrl = 'http://www.omdbapi.com/?v=1&';

        function httpPromise(url) {
            var deferred = $q.defer();

            $http.get(url).success(function (data) {
                    deferred.resolve(data);
                }).error(function () {
                deferred.reject();
            });
            return deferred.promise;
        }

        service.search = function (query) {
            var url = baseUrl + 's=' + encodeURIComponent(query);
            console.log('Url %s', url);
            return httpPromise(url);
        };

        service.find = function (id) {
            var url = baseUrl + 'i=' + id;
            console.log('Url %s', url);
            return httpPromise(url);
        };


        return service;
    }

})();
