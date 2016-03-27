angular.module('GithubReader.services', []).
factory('githubAPI', function($http) {
        
        var githubAPI = {};
        
        githubAPI.getRepositories = function($scope){
        
            return $http.get("https://api.github.com/users/" +  $scope.selectedOwner + "/repos");
        }
        
        githubAPI.getRepository = function($scope, $owner, $repo){
        
            return $http.get("https://api.github.com/repos/" +  $owner + "/" + $repo);
        }
        
        return githubAPI;
    });