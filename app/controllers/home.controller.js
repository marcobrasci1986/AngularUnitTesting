(function () {
    'use strict';

    angular
        .module('app.controllers')
        .controller('HomeController', HomeController);


    function HomeController($interval, MovieService, PopularMovieService, $log) {
        var vm = this;
        vm.results = [];
        vm.index = 0;

        vm.findMovie = function (movie) {
            MovieService.find(movie.imdbID).then(function (data) {
                vm.result = data;
            }, function (error) {
                $log.error("error");
            })
        };


        PopularMovieService.findPopularMovies().then(function (data) {
            vm.results = data;
            vm.findMovie(vm.results[0]);

            $interval(function () {
                vm.index++;
                vm.findMovie(vm.results[vm.index % vm.results.length]);
            }, 1000)
        }, function (error) {
            $log.error("Error");
        });
    }

})();

