(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('movieResult', MovieResult);


    function MovieResult() {
       return {
           restrict: 'E',
           replace: true,
           scope: {
               result: "=result"
           },
           controller: MovieResultController,
           controllerAs: 'vm',
           bindToController: true,
           templateUrl: '../templates/movie-result.html'
       }
    }

    function MovieResultController() {
        var vm = this;
        console.log('Result: ' + vm.result);
    }

})();

