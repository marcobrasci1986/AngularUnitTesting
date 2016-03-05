(function () {
    'use strict';

    angular
        .module('app.controllers')
        .controller('HomeController', HomeController);


    function HomeController($interval, MovieService, PopularMovieService) {
        var vm = this;
        vm.results = [];
        vm.index = 0;

        vm.findMovie = function (imdbID) {
            console.log('imdbID %s', imdbID);
            MovieService.find(imdbID).then(function (data) {
                vm.result = data;
            }, function (error) {
                console.log('Error');
            })
        };


        PopularMovieService.findPopularMovies().then(function (data) {
            vm.results = data;
            vm.findMovie(vm.results[0]);

            $interval(function () {
                vm.index++;
                vm.findMovie(vm.results[vm.index % vm.results.length]);
            }, 3000)
        }, function (error) {
            console.log('Error');
        });
    }

})();

