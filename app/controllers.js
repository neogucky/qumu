'use strict';

angular.module('GithubReader.controllers', []).
controller('repositoriesController', function($scope, githubAPI) {
           $scope.selectedOwner = "neogucky";
           
           //initialize repository list as empty before the first request ran throgh
           $scope.repositoryList = [];
           
           
           $scope.updateList = function() {
           
                //retrieve repository data from gitHub
                githubAPI.getRepositories($scope).success(function (response) {
                      $scope.repositoryList = response;
                });
           }
           
           $scope.updateList();
           
           }).

controller('repositoryController', function($scope, $routeParams, githubAPI) {
           
           $scope.repository = {};
           
           githubAPI.getRepository($scope, $routeParams.owner, $routeParams.id).success(function (response) {
                $scope.repository =  response;
           });
    });