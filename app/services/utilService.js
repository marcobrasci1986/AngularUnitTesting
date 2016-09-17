(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('SimpleService', SimpleService);


    function SimpleService(EmployeeService) {

        return {
            sum: _sum,
            findEmployees: _findEmployees
        };

        function _sum(a, b) {
            return a + b;
        }

        function _findEmployees() {
            return EmployeeService.list()

        }
    }

})();
