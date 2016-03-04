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
    }

})();
