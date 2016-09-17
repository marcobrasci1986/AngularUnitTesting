(function () {
    'use strict';

    angular
        .module('app.controllers')
        .controller('EmployeeController', EmployeeController);


    function EmployeeController(EmployeeService) {
        var vm = this;

        init();

        function init() {
            vm.employees = EmployeeService.list;
        };



    }

})();

