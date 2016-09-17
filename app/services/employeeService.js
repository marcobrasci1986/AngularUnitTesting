(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('EmployeeService', EmployeeService);


    function EmployeeService() {

        return {
            list: _list
        };

        function _list() {
            return [{
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
            }]
        }
    }

})();
