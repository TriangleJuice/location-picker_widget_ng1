(function (ng) {
    'use strict';

    ng
        .module('akit.component.locationPickerWidget', []);

})(window.angular);

(function (ng) {
    'use strict';

    ng
        .module('akit.component.locationPickerWidget', []);

})(window.angular);

(function (ng) {
    "use strict";

    ng.module("akit.component.locationPickerWidget").controller(
        "akit.component.locationPickerWidget.locationPickerAutocompleteController",
        [
            "$scope",
            function ($scope) {
            }
        ]
    );
})(window.angular);

(function (ng) {
    "use strict";

    ng.module("akit.component.locationPickerWidget").controller(
        "akit.component.locationPickerWidget.locationPickerWidgetController",
        [
            "$scope",
            "$timeout",
            "akit.component.locationPickerWidget.locationPickerService",
            function ($scope, $timeout, locationPickerService) {
                this.placeholder = $scope.placeholder || "";
                this.minLength = $scope.minLength || 2;
                this.noDataMessage = $scope.noDataMessage || "Geen resultaat gevonden";
                this.types = $scope.types || "street,number,poi";
                this.value = $scope.value || null;
                this.bufferInputMs = $scope.bufferInputMs || 500;

                this.valueChange = function (newValue) {
                    $scope.$emit("valueChange", { value: newValue });
                };

                var vm = this;
                vm.data = [];

                locationPickerService
                    .getLocationsByQuery($scope.url, 'Me', vm.types)
                    .then(
                        function (result) {
                            vm.data = result;
                        }
                    ).catch(
                    );

                $scope.$on("locationPickerMessageReplyClicked", vm.sendReply);
            }
        ]
    );
})(window.angular);

(function (ng) {
    'use strict';


    ng
        .module('akit.component.locationPickerWidget')
        .directive('focusFrom', ['$timeout', '$parse', function ($timeout, $parse) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    scope.$watch(attrs.focusFrom, function (value) {
                        if (value) {
                            $timeout(function () {
                                element[0].focus();
                            });
                            scope.$parent[attrs.focusFrom] = false;
                        }
                    });
                }
            };
        }]);

})(window.angular);

(function (ng) {
    'use strict';

    ng
        .module('akit.component.locationPickerWidget')
        .directive('auiLocationPickerAutocomplete', [
            '$timeout',
            function (
                $timeout
            ) {

                return {
                    restrict: 'E',
                    replace: true,
                    templateUrl: '/assets/location-picker-widget/views/directives/location-picker-autocomplete.htm',
                    controller: 'akit.component.locationPickerWidget.locationPickerAutocompleteController',
                    controllerAs: 'autocomplete',
                    scope: {
                        data: '='
                    }
                };












































            }
        ]);

})(window.angular);

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
                        valueChange: '@?'
                    },
                    link: function (scope, element, attrs, ctrl) {

                    }
                };

            }
        ]);

})(window.angular);














(function (ng) {
    'use strict';

    ng
        .module('akit.component.locationPickerWidget')
        .service('akit.component.locationPickerWidget.locationPickerService', [
            '$http',
            function ($http) {

                var API = {};

                function getLocationsByQuery(dataSource, search, types) {
                    var uri = dataSource +
                        ((dataSource.indexOf('?') < 0) ? '?' : '&') +
                        'search=' + search +
                        (types ? '&types=' + types : '');
                    return $http.get(uri);
                }

                API.getLocationsByQuery = getLocationsByQuery;

                return API;

            }
        ]);

})(window.angular);

angular.module("akit.component.locationPickerWidget").run(["$templateCache", function($templateCache) {$templateCache.put("/assets/location-picker-widget/views/directives/location-picker-autocomplete.htm","<div><h6>Autocomplete goes here</h6></div>");
$templateCache.put("/assets/location-picker-widget/views/directives/location-picker-widget.htm","<div class=\"a-input m-location-picker\"><h4>Location picker goes here</h4><div class=\"a-input__wrapper\"><pre>{{ locationPicker | json }}</pre><aui-location-picker-autocomplete></aui-location-picker-autocomplete></div></div>");}]);