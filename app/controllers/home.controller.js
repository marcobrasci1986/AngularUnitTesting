(function () {
    'use strict';

    angular
        .module('app.controllers')
        .controller('HomeController', HomeController);


    function HomeController($interval, MovieService, PopularMovieService, $log) {
        var vm = this;
        vm.results = [];
        vm.index = 0;

        $log.log('log level');
        $log.info('info level');
        $log.error('error level');
        $log.warn('warn level');
        $log.debug('debug level');

        vm.findMovie = function (imdbID) {
            console.log('imdbID %s', imdbID);
            MovieService.find(imdbID).then(function (data) {
                vm.result = data;
            }, function (error) {
                $log.error('Error')
            })
        };


        PopularMovieService.query(function (data) {
            vm.results = data;
            vm.findMovie(vm.results[0]);

            $interval(function () {
                vm.index++;
                vm.findMovie(vm.results[vm.index % vm.results.length]);
            }, 3000)
        }, function (error) {
            $log.error('Error');
        });
    }

})();

