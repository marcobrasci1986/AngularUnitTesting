(function () {
    'use strict';

    angular
        .module('app.controllers')
        .controller('ResultsController', ResultsController);


    function ResultsController($location, MovieService) {
        var vm = this;

        var query = $location.search().q;
        MovieService.search(query).then(function (data) {
            vm.results = data.Search;
        }, function (error) {
            vm.errorMessage = 'error';
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
