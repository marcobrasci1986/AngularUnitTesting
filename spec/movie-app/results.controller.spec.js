describe("Results Controller", function () {
    var vm;
    var $controller;
    var $q;
    var $rootScope;
    var $location;
    var omdbApi;
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

    beforeEach(module('app.services'));
    beforeEach(module('movieApp'));

    beforeEach(inject(function (_$controller_,_$location_, _$q_, _$rootScope_,_omdbApi_) {
        $controller = _$controller_;
        $q = _$q_;
        $rootScope = _$rootScope_;
        $location = _$location_;
        omdbApi = _omdbApi_;
    }));

    it("should load search results", function () {
        spyOn(omdbApi, 'search').and.callFake(function () {
            var deferred = $q.defer();
            deferred.resolve(results);
            return deferred.promise;
        });

        $location.search('q', 'star wars');
        vm = $controller('ResultsController');
        $rootScope.$apply();

        expect(vm.results[0].Title).toBe(results.Search[0].Title);
        expect(vm.results[1].Title).toBe(results.Search[1].Title);
        expect(vm.results[2].Title).toBe(results.Search[2].Title);

        expect(omdbApi.search).toHaveBeenCalledWith('star wars')

    });

    it("should set result status to error", function () {
        spyOn(omdbApi, 'search').and.callFake(function () {
            var deferred = $q.defer();
            deferred.reject(results);
            return deferred.promise;
        });

        $location.search('q', 'star wars');
        vm = $controller('ResultsController');
        $rootScope.$apply();

        expect(vm.errorMessage).toBe('error');
    });


});