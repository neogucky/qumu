'use strict';

angular.module('GithubReader.controllers', []).
controller('repositoriesController', function($scope,  $routeParams, githubAPI) {
           $scope.selectedOwner =  $routeParams.owner;
           
           //initialize repository list as empty before the first request ran throgh
           $scope.repositoryList = [];
           
           
           $scope.updateList = function() {
           
                //retrieve repository data from gitHub
                githubAPI.getRepositories($scope).success(function (response) {
                      $scope.repositoryList = response;
                });
           }
           
           $scope.updateOnEnter = function($event) {
           
                if ($event.keyCode == 13 /*Enter*/) {
                    $scope.updateList();
                }
           
           }
           
           $scope.updateList();
           
           }).

controller('repositoryController', function($scope, $routeParams, githubAPI, $location) {
           
           $scope.repository = {};
           
           githubAPI.getRepository($scope, $routeParams.owner, $routeParams.id).success(function (response) {
                $scope.repository =  response;
           });
           
           $scope.back = function() {
           
                $location.path('/repositories/' + $scope.repository.owner.login);
           
           }

    });