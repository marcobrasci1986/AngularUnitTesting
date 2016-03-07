describe('FromNowFilterTest', function () {
    var fromNow;

    beforeEach(module('movieApp'));

    beforeEach(inject(function (_$filter_) {
        fromNow = _$filter_('fromNow'); // get filter object to test -> string is exact name !!!
    }));

    it('should throw error for undefined', function () {
        expect(fromNow).not.toThrow('date value cannot be undefined');
    });

    it('should return the same if value is invalid', function () {
        expect(fromNow('foo')).toBe('foo');
    });


    it('should return value of years ago for date object', function () {
        var value = new angular.mock.TzDate(0, '2013-07-01T00:00:00.000Z');
        var baseDate = new angular.mock.TzDate(0, '2015-08-01T21:00:00.000Z');

        expect(fromNow(value, baseDate)).toBe('2 years ago');
    });

    it('should return value of years ago for date object', function () {
        var value = new angular.mock.TzDate(0, '2013-07-01T00:00:00.000Z');
        var baseDate = new angular.mock.TzDate(0, '2014-08-01T21:00:00.000Z');

        expect(fromNow(value, baseDate)).toBe('1 year ago');
    });
});