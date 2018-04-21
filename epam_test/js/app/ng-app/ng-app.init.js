'use strict';
var epamApp = angular.module('epam-app', ['ui.router']);

epamApp.service('Data',  Data);

epamApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    .state('index', {
            url: "/",
            controller : IndexController,
            templateUrl : "/ng-app/templates/index.html"
    })
    .state('edit', {
            url: "/edit/{id}",
            controller : EditController,
            templateUrl : "/ng-app/templates/edit.html",
            params:{
                id: null
            }
    })
    .state('add', {
            url: "/add",
            controller : EditController,
            templateUrl : "/ng-app/templates/edit.html",
    });
    
});