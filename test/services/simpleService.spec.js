describe("MovieServiceTest", function () {

    var SimpleService = {};

    beforeEach(module('app.services'));

    beforeEach(function () {
        inject(function (_SimpleService_) {
            SimpleService = _SimpleService_;
        });
    });

    it("test", function () {

        var result = SimpleService.sum(5,3);

        expect(result).toEqual(8);

    });
});