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
    var $timeout;

    beforeEach(module('movieApp'));

    /**
     * Set up DI like in the controller to mock
     */
    beforeEach(inject(function (_$controller_, _$location_, _$timeout_) {
        $controller = _$controller_;
        $location = _$location_;
        $timeout = _$timeout_;

        /**
         * Controller to mock
         */
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

    it('should be redirected after 1 second', function () {
        vm.query = 'star wars';
        vm.keyup();

        // execute timeouts
        $timeout.flush();

        // verify that all timouts have been executed
        expect($timeout.verifyNoPendingTasks).not.toThrow();
        expect($location.url()).toBe('/results?q=star%20wars');
    });

    it('should cancel timeout in keydown', function () {
        vm.query = "star wars";
        vm.keyup();
        vm.keyDown();

        expect($timeout.verifyNoPendingTasks).not.toThrow();
    });

    it('should cancel timeout in search()', function () {
        vm.query = "star wars";
        vm.keyup();
        vm.search();

        expect($timeout.verifyNoPendingTasks).not.toThrow();
    });





});