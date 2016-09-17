(function () {
    'use strict';

    angular
        .module('app.controllers')
        .controller('EmployeeController', EmployeeController);


    function EmployeeController(EmployeeService, SimpleService) {
        var vm = this;

        init();

        function init() {
            vm.employees = EmployeeService.list;
        };


        vm.makeTheSum = function (a, b) {
            return SimpleService.sum(a, b);
        }



    }

})();

