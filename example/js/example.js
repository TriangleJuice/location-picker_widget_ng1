(function (ng) {
    'use strict';

    ng
        .module('locationPickerWidget', ['akit.component.locationPickerWidget'])
        .controller('locationPickerWidgetCtrl', [
            '$scope',
            function ($scope) {

            	this.valueChange = function (event, data) {
            		console.log(data);
            		$scope.test = data;
            	}

            	$scope.$on("valueChange", this.valueChange);
            }
        ]);

// @ts-ignore
})(window.angular);
