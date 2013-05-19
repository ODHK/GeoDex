console.log('LOADED');

'use strict';


// JS for leaflet 
$(function(){
	var map = L.map('map').setView([22.25018, 114.18571], 13);
	console.log(map)

	var cloudmade = L.tileLayer('http://{s}.tile.cloudmade.com/{key}/{styleID}/256/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
		minZoom: 11,
		key: 'BC9A493B41014CAABB98F0471D759707',
		styleID: 1714, 
		reuseTiles: true
	}).addTo(map);
	console.log(cloudmade)
})	
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


function onContentHeaderClick() {

};