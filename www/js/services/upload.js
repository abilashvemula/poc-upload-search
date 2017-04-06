(function () {
   'use strict';

   angular.module('myApp')
   .factory('UploadServ', ['$http', function ($http) {
      function uploadFile(file, year, subject){
         console.log(file)
         var fd = new FormData();
         fd.append('file', file);

         var reqUrl = ('/upload/' + year + '/' + subject);
            console.log(reqUrl)

         return $http.post(reqUrl, fd, {
            headers: {'Content-Type': undefined}
         })
         .then(function (res) {
            return res.data;
         })
      }

      return {
         uploadFile: uploadFile
      }
   }]);

})();