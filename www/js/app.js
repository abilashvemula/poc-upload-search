(function () {
	'use strict';

	angular.module('myApp', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
		.when('/search', {
			templateUrl: '../partials/search.html',
			controller: 'searchCtrl'
		})
		.when('/list/:year', {
			templateUrl: '../partials/list.html',
			controller: 'listCtrl'
		})
		.when('/list/:subject', {
			templateUrl: '../partials/list.html',
			controller: 'listCtrl'
		})
		.when('/list/:year/:subject', {
			templateUrl: '../partials/list.html',
			controller: 'listCtrl'
		})
		.when('/upload', {
			templateUrl: '../partials/upload.html',
			controller: 'uploadCtrl'
		})
		.when('/home', {
			templateUrl: '../partials/home.html',
			controller: 'homeCtrl'
		})
		.otherwise('/home')

	}])

})();
