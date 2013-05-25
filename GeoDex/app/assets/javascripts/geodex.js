'use strict';

// JS for leaflet 

// Create the GeoDex module and assign it to window.App.
// We also add the dependency of ngResource which provides simple REST 
// client functionality.

window.App = angular.module('GeoDex', ['leaflet-directive','ngResource'])

function onContentHeaderClick() {};

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

var map = L.map('map')

function geodexInit(feat) {
	L.geoJson(feat, {
	    onEachFeature: onEachFeature
	}).addTo(map);
}
$(document).ready(function() {
	// Stuff to do as soon as the DOM is ready;
	geodexInit(featureCollection);
});
