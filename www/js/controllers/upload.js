(function () {
	'use strict';

	angular.module('myApp')
	.controller('uploadCtrl', ['$scope', '$route', '$location', 'UploadServ', uploadCtrl]);

	function uploadCtrl($scope, $route, $location, UploadServ) {
		$(document).on('change', ':file', function() {
			var input = $(this),
			numFiles = input.get(0).files ? input.get(0).files.length : 1,
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
			input.trigger('fileselect', [numFiles, label]);
		});

		$(':file').on('fileselect', function(event, numFiles, label) {
			$scope.$apply(function () {
				$scope.fileName = label;				
			})
		});

		$scope.uploadFile = function () {
			$scope.uploadForm.$submitted = true;

			var file = $scope.myFile;
			UploadServ.uploadFile(file, $scope.year, $scope.subject)
			.then(function (data) {
				$scope.message = "Successfully Uploaded"
			})
		}

		$scope.showForm = function () {
			$route.reload();
		}


	}
})();