(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('SimpleService', SimpleService);


    function SimpleService() {

        return {
            sum: _sum
    }

        function _sum(a, b) {
            return a + b;
        }
    }

})();
