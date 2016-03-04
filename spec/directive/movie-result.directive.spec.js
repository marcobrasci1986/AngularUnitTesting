describe('MovieResultDirectiveTest', function () {

    var result = {
        Poster: 'http://localhost/image.jpg',
        Title: 'Star Wars: Episode IV - A New Hope',
        Director: 'George Lucas',
        Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
        Released: '25 May 1977',
        Genre: 'Action, Adventure, Fantasy',
        Plot: 'A young boy from Tatooine sets out on an adventure with an old Jedi named Obi-Wan Kenobi as his mentor to save Princess Leia from the ruthless Darth Vader and Destroy the Death Star built by the Empire which has the power to destroy the entire galaxy.'
    };

    var expectedHtml = [
        '<div class="col-sm-4">',
        '<img ng-src="http://localhost/image.jpg" alt="Star Wars: Episode IV - A New Hope" width="220" src="http://localhost/image.jpg">',
        '</div>',
        '<div class="col-sm-8">',
        '<h3 class="ng-binding">Star Wars: Episode IV - A New Hope</h3>',
        '<p class="ng-binding">A young boy from Tatooine sets out on an adventure with an old Jedi named Obi-Wan Kenobi as his mentor to save Princess Leia from the ruthless Darth Vader and Destroy the Death Star built by the Empire which has the power to destroy the entire galaxy.</p>',
        '<p class="ng-binding"><strong>Director:</strong> George Lucas</p>',
        '<p class="ng-binding"><strong>Actors:</strong> Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing</p>',
        '<p class="ng-binding"><strong>Released:</strong> 25 May 1977</p>',
        '<p class="ng-binding"><strong>Genre:</strong> Action, Adventure, Fantasy</p>',
        '</div>'
    ].join('');

    var $compile;

    beforeEach(inject(function (_$compile_) {
        $compile = _$compile_;
    }));

    it('should output correct HTML', function () {
        var html;
        html = $compile('<movie-results result="vm.result"></movie-results>').html();
        expect(html).toBe('<div> </div>')
    });
});