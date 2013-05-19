'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);


function AccordionDemoCtrl($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: "That one In the North",
      content: "Lorem ipsum poopem sapsam"

    },
    {
      title: "That one In the South",
      content: "Lorem ipsum poopem sapsam"
    },
    {
      title: "That one In the NorthWest",
      content: "Lorem ipsum poopem sapsam"
    },
    {
      title: "That one In the NorthEast",
      content: "Lorem ipsum poopem sapsam"
    },
    {
      title: "That one In the North",
      content: "Lorem ipsum poopem sapsam"
    },
    {
      title: "That one In the North",
      content: "Lorem ipsum poopem sapsam"
    },
    {
      title: "That one In the NorthWest",
      content: "Lorem ipsum poopem sapsam"
    },
    {
      title: "That one In the NorthWest",
      content: "Lorem ipsum poopem sapsam"
    },
    {
      title: "That one In the NorthWest",
      content: "Lorem ipsum poopem sapsam"
    },
    {
      title: "That one In the NorthWest",
      content: "Lorem ipsum poopem sapsam"
    },
    {
      title: "That one In the NorthWest",
      content: "Lorem ipsum poopem sapsam"
    },
    {
      title: "That one In the NorthWest",
      content: "Lorem ipsum poopem sapsam"
    },
    {
      title: "That one In the NorthWest",
      content: "Lorem ipsum poopem sapsam"
    },
    {
      title: "That one In the NorthWest",
      content: "Lorem ipsum poopem sapsam"
    },
    {
      title: "That one In the NorthWest",
      content: "Lorem ipsum poopem sapsam"
    },
    {
      title: "That one In the NorthWest",
      content: "Lorem ipsum poopem sapsam"
    },

    {
      title: "That one In the North",
      content: "Lorem ipsum poopem sapsam"
    }
  ];


  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };
}


function onContentHeaderClick() {
 
};