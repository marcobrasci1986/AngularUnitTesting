describe("omdb service", function () {
    var movieData = {
        "Search": [{
            "Title": "Star Wars: Episode IV - A New Hope",
            "Year": "1977",
            "imdbID": "tt0076759",
            "Type": "movie",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX300.jpg"
        }, {
            "Title": "Star Wars: Episode V - The Empire Strikes Back",
            "Year": "1980",
            "imdbID": "tt0080684",
            "Type": "movie",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMjE2MzQwMTgxN15BMl5BanBnXkFtZTcwMDQzNjk2OQ@@._V1_SX300.jpg"
        }, {
            "Title": "Star Wars: Episode VI - Return of the Jedi",
            "Year": "1983",
            "imdbID": "tt0086190",
            "Type": "movie",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ0MzI1NjYwOF5BMl5BanBnXkFtZTgwODU3NDU2MTE@._V1._CR93,97,1209,1861_SX89_AL_.jpg_V1_SX300.jpg"
        }, {
            "Title": "Star Wars: Episode I - The Phantom Menace",
            "Year": "1999",
            "imdbID": "tt0120915",
            "Type": "movie",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ4NjEwNDA2Nl5BMl5BanBnXkFtZTcwNDUyNDQzNw@@._V1_SX300.jpg"
        }, {
            "Title": "Star Wars: Episode III - Revenge of the Sith",
            "Year": "2005",
            "imdbID": "tt0121766",
            "Type": "movie",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
        }, {
            "Title": "Star Wars: Episode II - Attack of the Clones",
            "Year": "2002",
            "imdbID": "tt0121765",
            "Type": "movie",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTY5MjI5NTIwNl5BMl5BanBnXkFtZTYwMTM1Njg2._V1_SX300.jpg"
        }, {
            "Title": "Star Wars: Episode VII - The Force Awakens",
            "Year": "2015",
            "imdbID": "tt2488496",
            "Type": "movie",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
        }, {
            "Title": "Star Wars: The Clone Wars",
            "Year": "2008",
            "imdbID": "tt1185834",
            "Type": "movie",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTI1MDIwMTczOV5BMl5BanBnXkFtZTcwNTI4MDE3MQ@@._V1_SX300.jpg"
        }, {
            "Title": "Star Wars: The Clone Wars",
            "Year": "2008–2015",
            "imdbID": "tt0458290",
            "Type": "series",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTM0NjQ2Mjk0OV5BMl5BanBnXkFtZTcwODQ3Njc3Mg@@._V1_SX300.jpg"
        }, {
            "Title": "Star Wars: Clone Wars",
            "Year": "2003–2005",
            "imdbID": "tt0361243",
            "Type": "series",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMjE2Mjk5Mzk3M15BMl5BanBnXkFtZTcwMDkzMTIzMQ@@._V1_SX300.jpg"
        }], "totalResults": "312", "Response": "True"
    };
    var movieDataById = {
        "Title": "Star Wars: Episode I - The Phantom Menace",
        "Year": "1999",
        "Rated": "PG",
        "Released": "19 May 1999",
        "Runtime": "136 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "George Lucas",
        "Writer": "George Lucas",
        "Actors": "Liam Neeson, Ewan McGregor, Natalie Portman, Jake Lloyd",
        "Plot": "Two Jedi Knights escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to reclaim their old glory.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Nominated for 3 Oscars. Another 17 wins & 60 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ4NjEwNDA2Nl5BMl5BanBnXkFtZTcwNDUyNDQzNw@@._V1_SX300.jpg",
        "Metascore": "51",
        "imdbRating": "6.5",
        "imdbVotes": "508,509",
        "imdbID": "tt0120915",
        "Type": "movie",
        "Response": "True"
    };
    // Service to be mocked
    var omdbApi = {};

    var $httpBackend;

    // Static import
    beforeEach(module('app.services'));

    beforeEach(function () {
        inject(function (_omdbApi_, _$httpBackend_) {
            omdbApi = _omdbApi_;
            $httpBackend = _$httpBackend_;
        });
    });

    //console.log(angular.mock.dump(movieData));
    it("should return search movie data", function () {
        var response;
        var expectedUrl = 'http://www.omdbapi.com/?v=1&s=star%20wars';

        $httpBackend.when('GET', expectedUrl)
            .respond(200, movieData);


        omdbApi.search('star wars')
            .then(function (data) {
                response = data;
            });

        $httpBackend.flush();

        expect(response).toEqual(movieData);
    });

    it("should return movie data by id", function () {
        var response;

        var expectedUrl = 'http://www.omdbapi.com/?v=1&i=tt0076759';

        $httpBackend.when('GET', expectedUrl)
            .respond(200, movieDataById);

        omdbApi.find('tt0076759').then(function (data) {
            response = data;
        });

        $httpBackend.flush();
        expect(response).toEqual(movieDataById);
    });

    it("should handle errors", function () {
        var response = 'test';
        var expectedUrl = 'http://www.omdbapi.com/?v=1&i=tt0076759';

        $httpBackend.when('GET', expectedUrl)
            .respond(500);

        omdbApi.find('tt0076759').then(function (data) {
            response = data;
        }, function () {
            response = 'Error!';
        });


        $httpBackend.flush();
        expect(response).toEqual('Error!');
    });
});