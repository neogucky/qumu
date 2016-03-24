angular.module('GithubReader.services', []).
factory('githubAPI', function($http) {
        
        var githubAPI = {};
        
        githubAPI.getRepositories = function($scope){
                                             
        return $http.get("https://api.github.com/users/" +  $scope.selectedOwner + "/repos");
        //https://api.github.com/users/neogucky/repos
        //http://localhost:8000/app/github.json
        }
        return githubAPI;
    });