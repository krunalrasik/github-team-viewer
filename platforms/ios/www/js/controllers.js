/* Controllers */
function AppCtrl($scope, $http, $log) {
  $scope.loading = true;
  $scope.finding = false;
  $scope.organization = 'github';
  var reset = function () {
    $scope.members = [];
    $scope.repos = [];
    $scope.repos = [];
    $scope.commits = [];
    $scope.current_member = null;
    $scope.current_repo = null;
  };
  reset();

  $scope.getMembers = function (organization) {
    reset();
    $log.log("Getting " + organization + ", for you, hold tight!");
    $http.jsonp("https://api.github.com/orgs/" + organization + "/members?callback=JSON_CALLBACK").success(function (data) {
      $scope.members = data.data;
      $scope.loading = false;
      $scope.finding = true;
    });
  };

  $scope.getUser = function (user) {
    $log.log("Getting " + user + "'s data.");
    $http.jsonp("https://api.github.com/users/" + user + "?callback=JSON_CALLBACK").success(function (data) {
      $scope.user = data.data;
      $scope.loading = false;
    });
  };

  $scope.getRepos = function (user) {
    $log.log("Fetching projects of " + user);
    $http.jsonp("https://api.github.com/users/" + user + "/repos?callback=JSON_CALLBACK").success(function (data) {
      $scope.repos = data.data;
    });
  };

  $scope.getCommits = function (repo) {
    $scope.current_repo = repo;
    $log.log("Wanna get commits from " + repo + ", huh?");
    $http.jsonp("https://api.github.com/repos/" + $scope.current_member + "/" + repo + "/commits?callback=JSON_CALLBACK").success(function (data) {
      $scope.commits = data.data;
    });
  };
}
//MyCtrl1.$inject = [];
