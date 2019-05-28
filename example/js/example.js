(function (ng) {
	'use strict';

	ng
		.module('locationPickerWidget', ['akit.component.locationPickerWidget'])
		.controller('locationPickerWidgetCtrl', [
			'$scope',
			function ($scope) {
				$scope.picker1;

				$scope.picker2 = {
					id: 'P_DA/Locaties/MapServer/18/646468',
					name: 'Piep-in-\'t-Riet',
					layer: 'straatnaam',
					street: 'Piep-in-\'t-Riet',
					locationType: 'street',
					coordinates: {
						lambert: {
							x: 146709.25951518,
							y: 226440.44134237
						},
						latLng: {
							lat: 51.347710435471946,
							lng: 4.321550045455797
						}
					}
				};

				$scope.valueChanged = function (value) {
					console.log(value);
				}

			}
		]);

// @ts-ignore
})(window.angular);
