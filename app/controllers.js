'use strict';

angular.module('GithubReader.controllers', []).
controller('repositoriesController', function($scope,  $routeParams, githubAPI, $location) {
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
         
           $scope.selectRepository = function($owner, $repository) {
           
                $location.path('/repositories/' + $owner + '/' + $repository);
           
           }

           
           $scope.updateList();
           
           }).

controller('repositoryController', function($scope, $routeParams, githubAPI, $location) {
           
           $scope.repository = {};
           
           githubAPI.getRepository($scope, $routeParams.owner, $routeParams.id).success(function (response) {
                $scope.repository =  response;
                                                                                        
                if (!$scope.repository.description) {
                    $scope.repository.description = '-';
                }
                                                                                        
           });
           
           $scope.back = function() {
           
                $location.path('/repositories/' + $scope.repository.owner.login);
           
           }

    });