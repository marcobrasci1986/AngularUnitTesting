angular.module('movieApp')
    .controller('ResultsController', function ($location, omdbApi) {
        var vm = this;

        var query = $location.search().q;
        omdbApi.search(query).then(function (data) {
            vm.results = data.Search;
        }, function (error) {
            vm.errorMessage = 'error';
        })
    });