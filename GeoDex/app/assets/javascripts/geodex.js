'use strict';


// JS for leaflet 
$(function(){
	// Declare app level module which depends on filters, and services
	angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', 'ui.bootstrap']);

	// JS for Angular
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

	function onEachFeature(feature, layer) {
	    // does this feature have a property named popupContent?
	    if (feature.properties && feature.properties.popupContent) {
	        layer.bindPopup(feature.properties.popupContent);
	    }
	}

	function geodexInit(feat) {
		L.geoJson(feat, {
		    onEachFeature: onEachFeature
		}).addTo(map);
	}

	function onContentHeaderClick() {
	};
})	