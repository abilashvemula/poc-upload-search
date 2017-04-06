(function () {
'use strict';

angular.module('myApp')
.controller('searchCtrl', ['$scope', '$location', searchCtrl]);

function searchCtrl($scope, $location) {
	$scope.query = {
		year: 2000,
		subject: 'm1'
	};

	$scope.searchFile = function () {
	    var year = $scope.query.year;
	    var subject = $scope.query.subject;
	    var navUrl = '/list/' + year + '/' + subject;
	    $location.url(navUrl)
	}

}

})();