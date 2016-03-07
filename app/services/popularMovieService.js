(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('PopularMovieService', PopularMovieService);

    function PopularMovieService($resource) {
        var token = 'teddybear'; // TBC
        return $resource('popular/:movieId', {movieId: '@id'}, {
            update: {
                method: 'PUT',
                headers: {'authToken': token}
            },
            get: {
                method: 'GET',
                headers: {'authToken': token}
            },
            query: {
                method: 'GET',
                headers: {'authToken': token},
                isArray: true
            },
            save: {
                method: 'POST',
                headers: {'authToken': token}
            },
            remove: {
                method: 'DELETE',
                headers: {'authToken': token}
            }
        });
    }

})();