(function () {
'use strict';

angular.module('myApp')
.controller('listCtrl', ['$scope', 'SearchServ', '$routeParams', listCtrl]);

function listCtrl($scope, SearchServ, $routeParams) {
	var year = $routeParams.year;
	var subject = $routeParams.subject;
	    SearchServ.get(year, subject).then(function (data) {
	    	$scope.list = data.list;
	    	$scope.message = data.message;


	    })
}

})();