import angular from "angular";
import _ from "lodash";

let app = angular.module("twitterClone", []);

app.controller("TweetCtrl", function($scope, $http) {
  $scope.tweet = '';

  $http.get("https://www.reddit.com/r/perfectloops.json")
      .success( data => {
        $scope.allPerfectLoops = data.data.children
          .map(function(rp) { return rp.data.url } )
          .filter(function(imgUrl) { return imgUrl.match(/gif$/) })
  });

  $scope.invalidTweetLength = () => $scope.tweet.length === 0 || $scope.remainingCharacters() < 0;
  $scope.remainingCharacters = () => 140 - $scope.tweet.length;

  $scope.tweetList = [];
  $scope.sendTweet = () => {
    $scope.tweetList.unshift($scope.tweet);

    if ($scope.tweet.match(/(?:\b|^)#perfectloop(?:\b|$)/)) {
      $scope.perfectLoop = _.sample($scope.allPerfectLoops);
    }

    $scope.tweet = '';
  };
});
