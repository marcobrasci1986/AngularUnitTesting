'use strict';

describe('EmployeeController', function () {
    var vm;
    var employeeData = [{
        "id": 1,
        "first_name": "Kathleen",
        "last_name": "Sanders",
        "email": "ksanders0@hao123.com",
        "gender": "Female"
    }, {
        "id": 2,
        "first_name": "David",
        "last_name": "Kim",
        "email": "dkim1@nature.com",
        "gender": "Male"
    }, {
        "id": 3,
        "first_name": "Rachel",
        "last_name": "Mcdonald",
        "email": "rmcdonald2@tinyurl.com",
        "gender": "Female"
    }, {
        "id": 4,
        "first_name": "Cynthia",
        "last_name": "Berry",
        "email": "cberry3@deliciousdays.com",
        "gender": "Female"
    }, {
        "id": 5,
        "first_name": "Carolyn",
        "last_name": "Washington",
        "email": "cwashington4@blogs.com",
        "gender": "Female"
    }];

    beforeEach(module('app.controllers'));

    var mockEmployeeService;
    var mockSimpleService;

    beforeEach(function () {
        mockEmployeeService = {
            list: employeeData
        };

        mockSimpleService = {
            sum: function (a, b) {
                return a*b;
            }
        };

        module(function ($provide) {
            $provide.value('EmployeeService', mockEmployeeService);
            $provide.value('SimpleService', mockSimpleService);
        });

    });

    /**
     * Find the controller you want to test
     */
    beforeEach(function () {
        inject(function ($controller) {
            vm = $controller('EmployeeController');
        });
    });

    it('should set vm.employees', function () {
        expect(vm.employees).toBe(employeeData);
    });

    it("it should call SimpleService sum", function () {
        // TODO returnValue only when 5,5 are passed in as params
        spyOn(mockSimpleService, 'sum').and.returnValue(3);
        var result = vm.makeTheSum(5,5);
        expect(result).toBe(3);
    });
});
