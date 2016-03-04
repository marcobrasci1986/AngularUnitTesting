/**
 * $timeout([fn], [delay in ms], [invokeApply], [Pass]);
 */
angular.module('movieApp')
    .controller('SearchController', function ($location, $timeout) {
        var vm = this;
        vm.timeout;
        vm.query

        vm.search = function () {
            $timeout.cancel(vm.timeout);
            if (vm.query) {
                $location.path('/results').search('q', vm.query);
            }
        };

        vm.keyup = function () {
            vm.timeout = $timeout(function () {
                vm.search();
            }, 1000);
        }

        vm.keyDown = function () {
            $timeout.cancel(vm.timeout);
        }
    })