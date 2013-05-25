'use strict';

// JS for leaflet 

// Create the GeoDex module and assign it to window.App.
// We also add the dependency of ngResource which provides simple REST 
// client functionality.

window.App = angular.module('GeoDex', ['leaflet-directive','ngResource'])

angular.extend($scope, {
    defaults: {
        tileLayer: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
        maxZoom: 14,
        path: {
            weight: 10,
            opacity: 1
	        }
	    },
	center: {
        lat: 51.505,
        lng: -0.09,
        zoom: 8
    }
});

function geodexInit(feat) {
	L.geoJson(feat, {
	    onEachFeature: onEachFeature
	}).addTo(map);
}

geodexInit(featureCollection);