/**
 * $interval(fn, delay, [count], [invokeApply], [Pass]);
 */
angular.module('movieApp')
    .controller('HomeController',
        function ($interval, omdbApi, PopularMovies) {
            var vm = this;
            vm.results = [];
            vm.index = 0;

            vm.findMovie = function (id) {
                omdbApi.find(id).then(function (data) {
                    vm.result = data;
                }, function (error) {
                    $log.error("error");
                })
            };


            PopularMovies.get().then(function (data) {
                vm.results = data;
                vm.findMovie(results[0]);

                $interval(function () {
                    vm.index++;
                    vm.findMovie(vm.results[vm.index % vm.results.length]);
                }, 5000)
            }, function (error) {
                $log.error("Error");
            });


        });

