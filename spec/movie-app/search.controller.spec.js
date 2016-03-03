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

        vm = $controller('SearchController');
    }));

    it("should redirect to the query results page for a non-empty query", function () {
        vm.query = 'star wars';
        vm.search();
        expect($location.url()).toBe('/results?q=star%20wars');
    });

    it("should not redirect for empty query", function () {
        vm.query = '';
        vm.search();
        expect($location.url()).toBe('');
    });
});