'use strict';


var fcApp = angular.module('fcApp',[]).// ['fcApp.filters', 'fcApp.services', 'fcApp.directives','ngResource']).
  config([
   '$interpolateProvider',function($interpolateProvider){
    $interpolateProvider.startSymbol('<{');
    $interpolateProvider.endSymbol('}>');
  }
]);


// fcApp.config([
//   '$routeProvider', function($routeProvider) { 
//      $routeProvider.when("/manual", {templateUrl:"/static/fc/partials/manual.html", controller:"fcController"});
//      $routeProvider.when("/auto", {templateUrl:"/static/fc/partials/auto.html", controller:"autoController"});  
//      $routeProvider.when("/results", {templateUrl:"/static/fc/partials/results.html", controller:"resultController"});  
//   	 $routeProvider.otherwise({redirectTo:"/auto"});
// 	}
// ]);

