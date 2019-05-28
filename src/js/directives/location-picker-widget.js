(function (ng) {
    'use strict';

    ng
        .module('akit.component.locationPickerWidget')
        .directive('auiLocationPickerWidget', [
            function () {

                return {
                    restrict: 'AE',
                    replace: true,
                    templateUrl: '/assets/location-picker-widget/views/directives/location-picker-widget.htm',
                    controller: 'akit.component.locationPickerWidget.locationPickerWidgetController',
                    controllerAs: 'locationPicker',
                    scope: {
                        url: '@',
                        placeholder: '@?',
                        minLength: '@?',
                        noDataMessage: '@?',
                        types: '@?',
                        value: '@?',
                        bufferInputMs: '@?',
                        searchingText: '@?',
                        valueChange: '@?'
                    },
                    link: function (scope, element, attrs, ctrl) {

                    }
                };

            }
        ]);

// @ts-ignore
})(window.angular);
