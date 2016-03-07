describe('HomeController', function () {

    var results = [
        {
            "Title": "Star Wars: Episode IV - A New Hope",
            "imdbID": "tt0076759"
        },
        {
            "Title": "Star Wars: Episode V - The Empire Strikes Back",
            "imdbID": "tt0080684"
        },
        {
            "Title": "Star Wars: Episode VI - Return of the Jedi",
            "imdbID": "tt0086190"
        }
    ];
    var $interval;
    var PopularMovieService;
    var MovieService;
    var vm;
    var $log;
    const intervalDelay = 3000;

    beforeEach(module('movieApp'));


    /**
     * Mock promise call to PopularMoviesService.get()
     */
    beforeEach(inject(function (_$q_, _PopularMovieService_) {
        spyOn(_PopularMovieService_, 'findPopularMovies').and.callFake(function () {
            var deferred = _$q_.defer();
            deferred.resolve(['tt0076759', 'tt0080684', 'tt0086190']);
            return deferred.promise;
        });
    }));

    /**
     * Mock promise call to MovieService.find(id)
     */
    beforeEach(inject(function (_$q_, _MovieService_) {
        spyOn(_MovieService_, 'find').and.callFake(function () {
            var deferred = _$q_.defer();
            var args = _MovieService_.find.calls.mostRecent().args[0];

            if (args === 'tt0076759') {
                deferred.resolve(results[0]);
            } else if (args === 'tt0080684') {
                deferred.resolve(results[1]);
            } else if (args === 'tt0086190') {
                deferred.resolve(results[2]);
            } else {
                deferred.reject();
            }

            return deferred.promise;
        });
    }));

    beforeEach(inject(function (_$controller_, _$interval_, _$rootScope_, _PopularMovieService_, _MovieService_, _$log_) {
        vm = _$controller_('HomeController');
        PopularMovieService = _PopularMovieService_;
        MovieService = _MovieService_;
        $interval = _$interval_;
        $log = _$log_;

        _$rootScope_.$apply();
    }));


    it('should rotate movies every 5 seconds', function () {

        expect(vm.results.length).toBe(3);

        // should have a default movie
        expect(vm.result.Title).toBe(results[0].Title);

        $interval.flush(intervalDelay);
        expect(vm.result.Title).toBe(results[1].Title);

        $interval.flush(intervalDelay);
        expect(vm.result.Title).toBe(results[2].Title);

        $interval.flush(intervalDelay);
        expect(vm.result.Title).toBe(results[0].Title);

        expect(MovieService.find.calls.argsFor(0)).toEqual(['tt0076759']);
        expect(MovieService.find.calls.argsFor(1)).toEqual(['tt0080684']);
        expect(MovieService.find.calls.argsFor(2)).toEqual(['tt0086190']);
        expect(MovieService.find.calls.argsFor(3)).toEqual(['tt0076759']);


        //$log.reset() // clear all logs
        //$log.assertEmpty() // checks that all log levels are empty
        expect($log.log.logs[0]).toEqual(['log level']);
        console.log(angular.mock.dump($log.log.logs));
        console.log(angular.mock.dump($log.info.logs));
        console.log(angular.mock.dump($log.warn.logs));
        console.log(angular.mock.dump($log.error.logs));
        console.log(angular.mock.dump($log.debug.logs));

    });

});
