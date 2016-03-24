'use strict';

angular.module('GithubReader.controllers', []).
controller('repositoryController', function($scope, githubAPI) {
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
    });