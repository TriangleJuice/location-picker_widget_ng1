(function (ng) {
	'use strict';

	ng
		.module('locationPickerWidget', ['akit.component.locationPickerWidget'])
		.controller('locationPickerWidgetCtrl', [
			'$scope',
			function ($scope) {
				$scope.picker1;

				$scope.picker2 = {
					id: '87548',
					name: 'Piep-in-\'t-Riet',
					layer: 'straatnaam',
					street: 'Piep-in-\'t-Riet',
					locationType: 'street',
					coordinates: {
						latLng: {
							lat: 51.347332372152295,
							lng: 4.321095513044615
						},
						lambert: {
							x: 146677.56234668,
							y: 226398.39632439
						}
					}
				};

				this.valueChange = function (event, data) {
					console.log(event, data);
				}

				$scope.$on("valueChange", this.valueChange);

			}
		]);

// @ts-ignore
})(window.angular);
