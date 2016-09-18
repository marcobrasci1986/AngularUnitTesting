describe("MovieServiceTest", function () {

    var SimpleService;
    var EmployeeService;

    var mockEmployeeService;

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


    /**
     * Invoke the module that has this service inside of it
     */
    beforeEach(module('app.services'));

    /**
     * Define your mocks first, so that the mocks can be used for DI in your service that you want to test
     */
    beforeEach(function () {
        mockEmployeeService = {
            list: {}
        };

        /**
         * When any service asks for an EmployeeService, use this one
         */
        module(function ($provide) {
            $provide.value('EmployeeService', mockEmployeeService);
        });
    });

    /**
     * Init service you want to test
     */
    beforeEach(
        inject(function (_SimpleService_) {
            SimpleService = _SimpleService_;
        })
    );

    /**
     * Simplest test no dependencies
     */
    it("testSum", function () {
        var result = SimpleService.sum(5, 3);
        expect(result).toEqual(8);
    });

    /**
     * Test with dependencies
     */
    it("testEmployeeList", function () {
        // Mockito.when(mockEmployeeService.list()).thenReturn(employeeData);
        spyOn(mockEmployeeService, 'list').and.returnValue(employeeData);
        var employees = SimpleService.findEmployees();

        expect(employees).toEqual(employeeData);
        // Mockito.verify(mockEmployeeService,1).list();
        expect(mockEmployeeService.list).toHaveBeenCalled();

    });
});