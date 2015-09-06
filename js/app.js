'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
  ]).
config(['$routeProvider', '$provide', function($routeProvider, $provide) {
	$routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
	$routeProvider.when('/finance/:action/:filter?', {templateUrl: 'partials/finance.html', controller: 'FinanceCtrl'});
	$routeProvider.when('/logged/:provider', {templateUrl: 'partials/home.html', controller: 'LoginCtrl'});
	$routeProvider.when('/logout', {templateUrl: 'partials/home.html', controller: 'LogoutCtrl'});
	$routeProvider.otherwise({redirectTo: '/home'});
}])
.constant('configAWS', {
	tableName: "sampletable",
	bucketName: "samplebucket",
	region: "us-east-1"
})	
.constant('configLogger', {
	amazonAppId:'amzn1.application.xxxx',
	amazonRoleArn: 'arn:aws:iam::yyyy:role/Praveen',
	amazonRoleName: "Praveen",
});
