App.controller 'FeaturesCtrl', ['$scope', ($scope) ->
  $scope.title = "Cycling Routes"
  angular.extend $scope,
    hongkong:
      lat: 22.25018
      lng: 114.18571
      zoom: 13
    geostyles:
      tileLayer: "http://{s}.tile.cloudmade.com/{key}/{styleID}/256/{z}/{x}/{y}.png"
      key: "c60b6517507943628e0073ace8b6232d"
      styleID: 45651
      minZoom: 4
      maxZoom: 18
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
]