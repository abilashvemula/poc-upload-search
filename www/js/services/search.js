(function () {
   'use strict';

   angular.module('myApp')
   .factory('SearchServ', ['$http', function ($http) {
      function get(year, subject) {
         var params = {
            year: year,
            subject: subject
         };

         return $http.get('/search', {params: params})
         .then(function (res) {
            return res.data;
         })
      }

      return {
         get: get
      }
   }]);

})();