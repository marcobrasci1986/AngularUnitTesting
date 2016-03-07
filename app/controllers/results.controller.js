(function () {
    'use strict';

    angular
        .module('app.controllers')
        .controller('ResultsController', ResultsController);


    function ResultsController($location, MovieService, $exceptionHandler, $log) {
        var vm = this;

        var query = $location.search().q;

        $log.debug('Controller loaded with query: %s', query);
        MovieService.search(query).then(function (data) {
            $log.debug('Data returned for query: ', query, data);
            vm.results = data.Search;
        }, function (error) {
            $exceptionHandler(error);
        })

        vm.expand = function (index, movie) {
            if (movie.open) {
                movie.open = false;
            } else {
                MovieService.find(movie.imdbID).then(function (data) {
                    vm.results[index].data = data;
                    vm.results[index].open = true;
                }, function () {
                    $log.error("error");
                })
            }

        }
    }

})();
