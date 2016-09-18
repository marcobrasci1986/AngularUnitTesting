/**
 * https://vimeo.com/90876119
 *
 * TemplateURL: use relative paths like -> templateUrl: 'templates/movie-result.html'
 * install : html2js -> npm install karma-ng-html2js-preprocessor --save-dev
 *
 * Add templates folder to files in karma.conf
 * Add preprocessors in karma.conf
 *
 * add ngHtml2JsPreprocessor stripPrefix
 */

describe('MovieResultDirectiveTest', function () {

    /**
     * Mock data
     *
     */
    var result = {
        Poster: 'http://localhost/image.jpg',
        Title: 'Star Wars: Episode IV - A New Hope',
        Director: 'George Lucas',
        Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
        Released: '25 May 1977',
        Genre: 'Action, Adventure, Fantasy',
        Year: 1968 ,
        Plot: 'A young boy from Tatooine sets out on an adventure with an old Jedi named Obi-Wan Kenobi as his mentor to save Princess Leia from the ruthless Darth Vader and Destroy the Death Star built by the Empire which has the power to destroy the entire galaxy.'
    };

    var $compile;
    var $rootScope;

    beforeEach(module('movieApp'));

    /**
     * Load templateURL
     */
    beforeEach(module("templates/movie-result.html"));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should output correct HTML', function () {
        $rootScope.result = result;

        var element;
        element = $compile('<movie-result result="result"></movie-result>')($rootScope);
        $rootScope.$digest();

        console.log('Element: ' + element.html().trim());

        var imageSrc = element.find('img').attr('ng-src');
        var title = element.find('h3').html();

        expect(imageSrc).toEqual('http://localhost/image.jpg');
        expect(title).toEqual('Star Wars: Episode IV - A New Hope');


    });
});