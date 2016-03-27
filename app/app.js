'use strict';

angular.module('GithubReader', [
    'GithubReader.controllers',
    'GithubReader.services',
    'ngRoute'
]).config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when("/repositories/:owner", {templateUrl: "views/repositories.html", controller: "repositoriesController"}).
        when("/repositories/:owner/:id", {templateUrl: "views/repository.html", controller: "repositoryController"}).
        otherwise({redirectTo: '/repositories/neogucky'});
        }]);
