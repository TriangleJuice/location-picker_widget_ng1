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
        "akit.component.locationPickerWidget.locationPickerWidgetController", [
            "$scope",
            "$timeout",
            function ($scope, $timeout) {

                var vm = this;

                vm.url = $scope.url || "";
                vm.placeholder = $scope.placeholder || "";
                vm.minLength = $scope.minLength || 2;
                vm.noDataMessage = $scope.noDataMessage || "Geen resultaat gevonden";
                vm.types = $scope.types || "street,number,poi";
                vm.value = $scope.value || {};
                vm.bufferInputMs = $scope.bufferInputMs || 500;
                vm.searchingText = $scope.searchingText || "Aan het zoeken";
                vm.valueChange = $scope.valueChange;

                vm.test = vm.value;

                vm.valueSelect = function (selected) {
                    if (selected) {
                        $scope.value = selected.originalObject;
                    } else {
                        $scope.value = null;
                    }
                    $timeout(function() { vm.valueChange(); }, 0);
                };

                vm.remoteUrlFormatData = function (str) {
                    return {search: str, types: vm.types };
                };
            }
        ]
    );
})(window.angular);

(function (ng) {
    'use strict';

    ng
        .module('akit.component.locationPickerWidget')
        .directive('auiLocationPicker', [
            function () {

                return {
                    restrict: 'AE',
                    replace: true,
                    templateUrl: '/assets/location-picker-widget/views/directives/location-picker-widget.htm',
                    controller: 'akit.component.locationPickerWidget.locationPickerWidgetController',
                    controllerAs: 'locationPicker',
                    scope: {
                        url: '@',
                        value: '=',
                        placeholder: '@?',
                        minLength: '@?',
                        noDataMessage: '@?',
                        types: '@?',
                        bufferInputMs: '@?',
                        searchingText: '@?',
                        valueChange: '&?'
                    }
                };

            }
        ]);
})(window.angular);

angular.module("akit.component.locationPickerWidget").run(["$templateCache", function($templateCache) {$templateCache.put("/assets/location-picker-widget/views/directives/custom-list.htm","<div class=\"o-auto-complete\"><input name=\"{{ inputName }}\" type=\"{{ inputType }}\" class=\"{{ inputClass }}\" autocapitalize=\"off\" autocorrect=\"off\" autocomplete=\"off\" placeholder=\"{{ placeholder }}\" maxlength=\"{{ maxlength }}\" ng-model=\"searchStr\" ng-disabled=\"disableInput\" ng-focus=\"onFocusHandler()\" ng-focus=\"resetHideResults()\" ng-blur=\"hideResults($event)\" ng-change=\"inputChangeHandler(searchStr)\"><div class=\"angucomplete-dropdown list-navigation\" ng-show=\"showDropdown\"><div class=\"o-auto-complete__info u-text-light u-margin-xs\" ng-show=\"searching\"><span class=\"a-spinner a-spinner--inline a-spinner--sm u-margin-right-xs\"></span><span ng-bind=\"textSearching\"></span></div><div class=\"o-auto-complete__info u-text-light u-margin-xs\" ng-show=\"!searching && (!results || results.length == 0)\" ng-bind=\"textNoResults\"></div><ul><li class=\"leaf\" ng-repeat=\"result in results track by $index\" ng-click=\"selectResult(result)\" ng-mouseenter=\"hoverRow($index)\" ng-class=\"{\'is-selected\': $index == currentIndex}\"><a class=\"leaf-link\"><div ng-if=\"!matchClass\">{{ result.title }}</div><div ng-if=\"matchClass\" ng-bind-html=\"result.title\"></div><small class=\"u-text-light o-auto-complete__description\" ng-if=\"!matchClass && result.description && (result.description !== \'CRAB\')\">{{ result.description }}</small><small class=\"u-text-light o-auto-complete__description\" ng-if=\"matchClass && result.description && (result.description !== \'CRAB\')\" ng-bind-html=\"result.description\"></small></a></li></ul></div></div>");
$templateCache.put("/assets/location-picker-widget/views/directives/location-picker-widget.htm","<div class=\"a-input m-location-picker\"><div class=\"a-input__wrapper\"><angucomplete-ie8 remote-url=\"{{ locationPicker.url }}\" remote-url-request-formatter=\"locationPicker.remoteUrlFormatData\" placeholder=\"{{ locationPicker.placeholder }}\" pause=\"{{ locationPicker.bufferInputMs }}\" initial-value=\"value\" selected-object=\"locationPicker.valueSelect\" title-field=\"name\" description-field=\"layer\" match-class=\"u-text-bold\" minlength=\"{{ locationPicker.minLength }}\" text-no-results=\"{{ locationPicker.noDataMessage }}\" text-searching=\"{{ locationPicker.searchingText }}\" template-url=\"/assets/location-picker-widget/views/directives/custom-list.htm\" input-class=\"field\"></angucomplete-ie8></div></div>");}]);