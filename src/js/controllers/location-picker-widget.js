(function (ng) {
    "use strict";

    ng.module("akit.component.locationPickerWidget").controller(
        "akit.component.locationPickerWidget.locationPickerWidgetController",
        [
            "$scope",
            "$timeout",
            "akit.component.locationPickerWidget.locationPickerService",
            function ($scope, $timeout, locationPickerService) {
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

                /** the event fired when the value changes */
                this.valueChange = function (newValue) {
                    $scope.$emit("valueChange", { value: newValue });
                };

                var vm = this;
                vm.data = [];

                // Send new data
                locationPickerService
                    .getLocationsByQuery($scope.url, 'Me', vm.types)
                    .then(
                        function (result) {
                            vm.data = result;
                            // if (result.data) {
                            //     result.data.forEach(function (item, index, res) {
                            //         vm.loadingIndex = index;
                            //         vm.isLoading = true;
                            //         $timeout(function () {
                            //             if (index === 0) {
                            //                 item.avatar = vm.avatar;
                            //             }
                            //             vm.addToChat(item);
                            //             if (index === res.length - 1) {
                            //                 vm.loadingIndex = null;
                            //                 vm.isLoading = false;
                            //             }
                            //         }, index * vm.delay);
                            //     });
                            // } else {
                            //     throw new Error("no data returned from service");
                            // }
                        }
                    ).catch(
                        // function (error) {
                        //     vm.pushError(error);
                        //     vm.isLoading = false;
                        // }
                    );

                // listen to click events of child <aui-location-picker-message> directives
                $scope.$on("locationPickerMessageReplyClicked", vm.sendReply);
            }
        ]
    );
// @ts-ignore
})(window.angular);
