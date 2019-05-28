(function (ng) {
    "use strict";

    ng.module("akit.component.locationPickerWidget").controller(
        "akit.component.locationPickerWidget.locationPickerWidgetController", [
            "$scope",
            "$timeout",
            function ($scope, $timeout) {

                var vm = this;

                /** The URL to the BFF. */
                vm.url = $scope.url || "";
                /** what to show in the input field when blank */
                vm.placeholder = $scope.placeholder || "";
                /** minimum number of characters typed before search is triggered */
                vm.minLength = $scope.minLength || 2;
                /** message to show when there are no hits */
                vm.noDataMessage = $scope.noDataMessage || "Geen resultaat gevonden";
                /** the type of values to search for, comma-separated list of "street", "number" or "poi" */
                vm.types = $scope.types || "street,number,poi";
                /** the value that is displayed */
                vm.value = $scope.value || null;
                /** how long to buffer keystrokes before requesting search results */
                vm.bufferInputMs = $scope.bufferInputMs || 500;
                /** searching text */
                vm.searchingText = $scope.searchingText || "Aan het zoeken";
                /** the event fired when the value changes */
                vm.valueChange = $scope.valueChange;

                vm.test = vm.value;

                vm.valueSelect = function (selected) {
                    if (selected) {
                        $scope.value = selected.originalObject;
                    } else {
                        $scope.value = null;
                    }
                    vm.valueChange({value: $scope.value});
                };

                vm.remoteUrlFormatData = function (str) {
                    return {search: str, types: vm.types };
                };
            }
        ]
    );
})(window.angular);
