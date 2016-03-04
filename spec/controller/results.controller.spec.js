describe("ResultsControllerTest", function () {
    var vm;
    var $controller;
    var $q;
    var $rootScope;
    var $location;
    var MovieService;
    var results = {
        "Search":[
            {
                "Title":"Star Wars: Episode IV - A New Hope",
                "Year":"1977",
                "imdbID":"tt0076759",
                "Type":"movie"
            },
            {
                "Title":"Star Wars: Episode V - The Empire Strikes Back",
                "Year":"1980",
                "imdbID":"tt0080684",
                "Type":"movie"
            },
            {
                "Title":"Star Wars: Episode VI - Return of the Jedi",
                "Year":"1983",
                "imdbID":"tt0086190",
                "Type":"movie"
            }
        ]
    };

    // static import
    beforeEach(module('app.services'));
    beforeEach(module('movieApp'));

    beforeEach(inject(function (_$controller_,_$location_, _$q_, _$rootScope_,_MovieService_) {
        $controller = _$controller_;
        $q = _$q_;
        $rootScope = _$rootScope_;
        $location = _$location_;
        MovieService = _MovieService_;

    }));

    it("should load search results", function () {
        spyOn(MovieService, 'search').and.callFake(function () {
            var deferred = $q.defer();
            deferred.resolve(results); // Resolve Promise: mocked data
            return deferred.promise;
        });

        /**
         * Mock to the return for location.search
         */
        $location.search('q', 'star wars');
        vm = $controller('ResultsController');
        $rootScope.$apply(); // must be called when testing promises

        // expectations
        expect(vm.results[0].Title).toBe(results.Search[0].Title);
        expect(vm.results[1].Title).toBe(results.Search[1].Title);
        expect(vm.results[2].Title).toBe(results.Search[2].Title);

        expect(MovieService.search).toHaveBeenCalledWith('star wars')

    });

    it("should set result status to error", function () {
        spyOn(MovieService, 'search').and.callFake(function () {
            var deferred = $q.defer();
            deferred.reject(results); // REJECT promise: mocked data
            return deferred.promise;
        });

        $location.search('q', 'star wars');
        vm = $controller('ResultsController');
        $rootScope.$apply();

        // expectations
        expect(vm.errorMessage).toBe('error');
    });


});