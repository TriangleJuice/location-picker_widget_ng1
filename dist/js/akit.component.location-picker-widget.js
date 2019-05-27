(function (ng) {
    'use strict';

    ng
        .module('akit.component.locationPickerWidget', ['angucomplete-ie8']);

})(window.angular);

(function (ng) {
    'use strict';

    ng
        .module('akit.component.locationPickerWidget', ['angucomplete-ie8']);

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
                            vm.data = result.data;
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

angular.module("akit.component.locationPickerWidget").run(["$templateCache", function($templateCache) {$templateCache.put("/assets/location-picker-widget/views/directives/custom-list.htm","<div class=\"o-auto-complete\"><input name=\"{{ inputName }}\" ng-model=\"searchStr\" ng-disabled=\"disableInput\" type=\"{{ inputType }}\" placeholder=\"{{ placeholder }}\" maxlength=\"{{ maxlength }}\" ng-focus=\"onFocusHandler()\" class=\"{{ inputClass }}\" ng-focus=\"resetHideResults()\" ng-blur=\"hideResults($event)\" autocapitalize=\"off\" autocorrect=\"off\" autocomplete=\"off\" ng-change=\"inputChangeHandler(searchStr)\"><div class=\"angucomplete-dropdown list-navigation\" ng-show=\"showDropdown\"><div class=\"o-auto-complete__info u-text-light u-margin-xs\" ng-show=\"searching\"><span class=\"a-spinner a-spinner--inline a-spinner--sm u-margin-right-xs\"></span><span ng-bind=\"textSearching\"></span></div><div class=\"o-auto-complete__info u-text-light u-margin-xs\" ng-show=\"!searching && (!results || results.length == 0)\" ng-bind=\"textNoResults\"></div><ul><li class=\"leaf\" ng-repeat=\"result in results\" ng-click=\"selectResult(result)\" ng-mouseenter=\"hoverRow($index)\" ng-class=\"{\'is-selected\': $index == currentIndex}\"><a class=\"leaf-link\"><div ng-if=\"!matchClass\">{{ result.title }}</div><div ng-if=\"matchClass\" ng-bind-html=\"result.title\"></div><small class=\"u-text-light o-auto-complete__description\" ng-if=\"!matchClass\">{{ result.description }}</small><small class=\"u-text-light o-auto-complete__description\" ng-if=\"matchClass\" ng-bind-html=\"result.description\"></small></a></li></ul></div></div>");
$templateCache.put("/assets/location-picker-widget/views/directives/location-picker-autocomplete.htm","<div><h6>Autocomplete goes here</h6></div>");
$templateCache.put("/assets/location-picker-widget/views/directives/location-picker-widget.htm","<div class=\"a-input m-location-picker\"><h4>Location picker goes here</h4><div class=\"a-input__wrapper\"><angucomplete-ie8 placeholder=\"{{ locationPicker.placeholder }}\" pause=\"{{ locationPicker.bufferInputMs }}\" selected-object=\"value\" local-data=\"locationPicker.data\" search-fields=\"name\" title-field=\"name\" description-field=\"layer\" match-class=\"u-text-bold\" minlength=\"{{ locationPicker.minLength }}\" text-no-results=\"{{ locationPicker.noDataMessage }}\" text-searching=\"Aan het zoeken\" template-url=\"/assets/location-picker-widget/views/directives/custom-list.htm\" input-class=\"field\"></angucomplete-ie8><pre style=\"background:#f4f4f4;padding:.25rem;max-height:50vh;overflow: auto\">{{ locationPicker.value | json }}</pre></div></div>");}]);