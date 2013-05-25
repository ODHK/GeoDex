App.controller 'FeaturesCtrl', ['$scope', ($scope) ->
  $scope.title = "Cycling Routes"
  angular.extend $scope,
    hongkong:
      lat: 22.25018
      lng: 114.18571
      zoom: 13
    geostyles:
      tileLayer: "http://{s}.tile.cloudmade.com/{key}/{styleID}/256/{z}/{x}/{y}.png"
      key: 'BC9A493B41014CAABB98F0471D759707'
      styleID: "96219"
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
]