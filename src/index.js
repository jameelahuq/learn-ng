import angular from "angular";
import _ from "lodash";
import http from "http";

var app = angular.module("planets", []);


app.controller("planet-drop-down", ($scope, $http) => {
  $scope.planetArray = [];
  $scope.getPlanetsOnPage = (url) => {
    $http.get(url).success((data) => {
      console.log(data.results);
      $scope.planetArray.push.apply($scope.planetArray, data.results);
      if(data.next !== null) {
        //console.log(data.next);
        $scope.getPlanetsOnPage(data.next);
      }
    });
    //console.log($scope.planetArray[0].name);
  };
  $scope.getPlanetsOnPage("http://swapi.co/api/planets/");
  console.log($scope.planetArray);
});
  //
  //var populatePlanets= function () {
  //  var i = 1;
  //  var promiseHere = $.ajax({
  //    url: "http://swapi.co/api/planets/?page=" + i,
  //    method: 'GET'
  //  });
  //
  //  promiseHere.success(function (data) {
  //    console.log(data.results);
  //    return data.results;
      //return [{
      //  name: "Mars",
      //  hex: "#F21B1B"
      //}, {
      //  name: "Neptune",
      //  hex: "#1B66F2"

      //}, {
      //  name: "Earth",
      //  hex: "#07BA16"
      //}];
  //  });
  //};




//
//app.run(function($rootScope) {
//  angular.element(document).on('click', (e) =>
//      $rootScope.$broadcast('documentClicked', angular.element(e.target))
//  );
//});
//
//app.directive("dropdown", function($rootScope) {
//  return {
//    restrict: "E",
//    templateUrl: "templates/dropdown.html",
//    scope: {
//      placeholder: "@",
//      list: "=",
//      selected: "=",
//      property: "@"
//    },
//    link: function(scope) {
//      scope.listVisible = false;
//      scope.isPlaceholder = true;
//
//      scope.select = function(item) {
//        scope.isPlaceholder = false;
//        scope.selected = item;
//      };
//
//      scope.isSelected = function(item) {
//        return item[scope.property] === scope.selected[scope.property];
//      };
//
//      scope.show = function() {
//        scope.listVisible = true;
//      };
//
//      $rootScope.$on("documentClicked", function(inner, target) {
//        console.log($(target[0]).is(".dropdown-display.clicked") || $(target[0]).parents(".dropdown-display.clicked").length > 0);
//        if (!$(target[0]).is(".dropdown-display.clicked") && !$(target[0]).parents(".dropdown-display.clicked").length > 0)
//          scope.$apply(function() {
//            scope.listVisible = false;
//          });
//      });
//
//      scope.$watch("selected", function(value) {
//        scope.isPlaceholder = scope.selected[scope.property] === undefined;
//        scope.display = scope.selected[scope.property];
//      });
//    }
//  }
//});




////===============================//



//let app = angular.module("twitterClone", []);
//
//app.controller("TweetCtrl", function($scope, $http) {
//  $scope.tweet = '';
//
//  $http.get("https://www.reddit.com/r/perfectloops.json")
//      .success( data => {
//        $scope.allPerfectLoops = data.data.children
//          .map(function(rp) { return rp.data.url } )
//          .filter(function(imgUrl) { return imgUrl.match(/gif$/) })
//  });
//
//  $scope.invalidTweetLength = () => $scope.tweet.length === 0 || $scope.remainingCharacters() < 0;
//  $scope.remainingCharacters = () => 140 - $scope.tweet.length;
//
//  $scope.tweetList = [];
//  $scope.sendTweet = () => {
//    $scope.tweetList.unshift($scope.tweet);
//
//    if ($scope.tweet.match(/(?:\b|^)#perfectloop(?:\b|$)/)) {
//      $scope.perfectLoop = _.sample($scope.allPerfectLoops);
//    }
//
//    $scope.tweet = '';
//  };
//});
