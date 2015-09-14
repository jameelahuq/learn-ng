import angular from "angular";

let app = angular.module("twitterClone", []);

app.controller("TweetCtrl", function($scope) {
  $scope.tweet = '';

  $scope.invalidTweetLength = () => $scope.tweet.length === 0 || $scope.remainingCharacters() < 0;
  $scope.remainingCharacters = () => 140 - $scope.tweet.length;

  $scope.tweetList = [];
  $scope.sendTweet = () => {
    $scope.tweetList.unshift($scope.tweet);
    $scope.tweet = '';
  };
});
