/**
 * $controller(
 *  constructor, -> string (controller name) or function
 *  locals, -> services required by the controller
 *  [bindings]); -> object for controllerAs this binding
 *
 *
 */

describe("Search Controller", function () {
    var vm;
    var $location;
    var $controller;

    beforeEach(module('movieApp'));

    beforeEach(inject(function (_$controller_, _$location_) {
        $controller = _$controller_;
        $location = _$location_;
    }));

    it("should redirect to the query results page for a non-empty query", function () {
        vm = $controller('SearchController', {$location: $location}, {query: 'star wars'});
        vm.search();
        expect($location.url()).toBe('/results?q=star%20wars');
    });

    it("should not redirect for empty query", function () {
        vm = $controller('SearchController', {$location: $location}, {query: ''});
        vm.search();
        expect($location.url()).toBe('');
    });
});