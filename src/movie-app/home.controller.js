/**
 * $interval(fn, delay, [count], [invokeApply], [Pass]);
 */
angular.module('movieApp')
    .controller('HomeController',
        function ($location, $interval, omdbApi, PopularMovies) {
            var vm = this;
            vm.index = 0;


            PopularMovies.get().then(function (data) {
                vm.results = data;
                vm.findMovie(results[0]);

                $interval(function () {
                    vm.index++;
                    vm.findMovie()
                }, 5000)
            });


            vm.findMovie = function (id) {
                omdbApi.find(id).then(function (data) {
                    vm.result = data;
                }, function (error) {
                })
            }
        });