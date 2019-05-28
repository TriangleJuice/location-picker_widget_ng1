(function (ng) {
    "use strict";

    ng.module("akit.component.locationPickerWidget").controller(
        "akit.component.locationPickerWidget.locationPickerWidgetController",
        [
            "$scope",
            "$timeout",
            function ($scope, $timeout) {
                /** The URL to the BFF. */
                this.url = $scope.url || "";
                /** what to show in the input field when blank */
                this.placeholder = $scope.placeholder || "";
                /** minimum number of characters typed before search is triggered */
                this.minLength = $scope.minLength || 2;
                /** message to show when there are no hits */
                this.noDataMessage = $scope.noDataMessage || "Geen resultaat gevonden";
                /** the type of values to search for, comma-separated list of "street", "number" or "poi" */
                this.types = $scope.types || "street,number,poi";
                /** the value that is displayed */
                this.value = $scope.value || null;
                /** how long to buffer keystrokes before requesting search results */
                this.bufferInputMs = $scope.bufferInputMs || 500;
                /** searching text */
                this.searchingText = $scope.searchingText || "Aan het zoeken";
                /** the event fired when the value changes */
                // this.valueChange = 'begin';
                this.valueSelected = function (selected) {
                    if (selected) {
                        vm.value = selected.originalObject;
                        $scope.$emit("valueChange", selected.originalObject );
                    } else {
                        vm.value = "";
                    }
                };

                var vm = this;

                vm.remoteUrlFormatData = function (str) {
                    return {search: str, types: vm.types };
                };
            }
        ]
    );
// @ts-ignore
})(window.angular);
