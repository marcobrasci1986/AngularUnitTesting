describe("MovieCore", function () {
    var PopularMovies;
    var $httpBackend;

    beforeEach(module('movieCore'));

    beforeEach(function () {
        inject(function (_PopularMovies_, _$httpBackend_) {
            PopularMovies = _PopularMovies_;
            $httpBackend = _$httpBackend_;
        })
    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    it("should create popular movie", function () {
        var expectedData = {"movieId":"tt0076759","description":"Great movie!"};
        $httpBackend.expectPOST(/./, expectedData).respond(201);

        var popularMovie = new PopularMovies({
            movieId: 'tt0076759',
            description: 'Great movie!'
        });

        popularMovie.$save(); // does a POST so we expect a POST
        expect($httpBackend.flush).not.toThrow();
    });


    it("should get popular movie by id", function () {
        $httpBackend.expectGET('popular/tt0076759').respond(200);

        PopularMovies.get({movieId: 'tt0076759'});

        expect($httpBackend.flush).not.toThrow();
    });

    it("should update popular movie", function () {
        $httpBackend.expectPUT('popular').respond(200);

        var popularMovie = new PopularMovies({
            movieId: 'tt0076759',
            description: 'Great movie!'
        });

        popularMovie.$update();
        expect($httpBackend.flush).not.toThrow();
    });

    it("should authenticate", function () {
        //headers = {"authToken": "teddybear","Accept": "application/json, text/plain, */*"}
        var headerData = function (headers) {
            return headers.authToken === 'teddybear';
        };

        var matchAny = /.*/;

        $httpBackend.whenGET(matchAny, headerData).respond(200);
        $httpBackend.expectPOST(matchAny,matchAny, headerData).respond(200);
        $httpBackend.expectPUT(matchAny,matchAny, headerData).respond(200);
        $httpBackend.expectDELETE(matchAny, headerData).respond(200);

        var popularMovie = new PopularMovies({
            movieId: 'tt0076759',
            description: 'Great movie!'
        });

        PopularMovies.query(); // GET
        PopularMovies.get({id: 'tt0076759'}); // GET
        new PopularMovies(popularMovie).$save(); // POST
        new PopularMovies(popularMovie).$update(); // PUT
        new PopularMovies(popularMovie).$remove(); // DELETE

        expect($httpBackend.flush).not.toThrow();

    });
});