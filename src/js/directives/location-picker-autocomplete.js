(function (ng) {
    'use strict';

    ng
        .module('akit.component.locationPickerWidget')
        .directive('auiLocationPickerAutocomplete', [
            '$timeout',
            // 'eventsService',
            // 'HelperService',
            // '_',
            function (
                $timeout
                // eventsService,
                // HelperService,
                // _
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


                // return {
                //     restrict: 'A',
                //     scope: {
                //         autofocus: '=?',
                //         id: '@',
                //         ngModel: '=',
                //         ngOptions: '=',
                //         disabled: '=?',
                //         ngChange: '=?',
                //         ngPicked: '=?',
                //         lazyload: '=?',
                //         delay: '@?',
                //         placeholder: '@?',
                //         label: '@?',
                //         noResults: '@?'
                //     },
                //     templateUrl: '/assets/location-picker-widget/views/directives/location-picker-autocomplete.htm',
                //     replace: true,
                //     link: function (scope, element, attr) {

                //         // --- Directive Variables. ------------------------------------- //

                //         var lazyWatcher, timer;


                //         // --- Directive Functions. ------------------------------------- //

                //         function initialize() {
                //             if (scope.ngModel === undefined) {
                //                 if (scope.lazyload) {
                //                     lazyWatcher = scope.$watch('ngModel', function onNgModelChange(newValue, oldValue) {
                //                         if (newValue !== oldValue && newValue !== undefined) {
                //                             initialize();
                //                         }
                //                     });
                //                 }

                //                 return;
                //             } else {
                //                 if (lazyWatcher !== undefined) {
                //                     lazyWatcher();
                //                 }
                //             }

                //             if (scope.ngOptions === undefined) {
                //                 console.error('The autocomplete directive requires an options model ([%s]).', scope.choices); //eslint-disable-line no-console
                //                 return;
                //             }

                //             setDefaults();

                //             if (scope.autofocus) {
                //                 $timeout(function () {
                //                     $('#' + scope.id).focus();
                //                 }, 0);
                //             }
                //         }

                //         function setDefaults() {
                //             scope.disabled = scope.disabled !== undefined ? scope.disabled : false;
                //             scope.delay = scope.delay || 0;
                //             scope.noResults = scope.noResults || "Geen resultaten gevonden.";
                //         }

                //         function findStringInOptions(string) {
                //             var results = [];
                //             var str = HelperService.string.flatten(string);

                //             _.each(scope.ngOptions, function (option) {
                //                 var value = option.value.toLowerCase();
                //                 if (value.indexOf(str) > -1) {
                //                     results.push(option);
                //                 }
                //             });

                //             return results;
                //         }


                //         // --- Scope Variables. ----------------------------------------- //

                //         scope.search = {
                //             term: "",
                //             results: [],
                //             layout: {
                //                 fieldClass: "span-full tablet--span-full desktop--span-full"
                //             }
                //         };

                //         scope.state = {
                //             searching: false,
                //             hiliteIndex: -1
                //         };


                //         // --- Scope Functions. ----------------------------------------- //

                //         scope.onFocus = function onFocus() {
                //             scope.search.results = scope.choices;
                //         };

                //         scope.searchString = function searchString() {
                //             if (timer !== undefined) {
                //                 $timeout.cancel(timer);
                //             }

                //             if (scope.ngChange) {
                //                 scope.ngChange(scope.search.term);
                //             }

                //             timer = $timeout(function () {
                //                 scope.search.results.length = 0;

                //                 if (scope.search.term.length > 0) {
                //                     scope.search.results = findStringInOptions(scope.search.term);
                //                 }
                //             }, scope.delay);
                //         };

                //         scope.pickChoice = function pickChoice(choice) {
                //             if (choice) {
                //                 scope.ngModel = choice.key;
                //                 scope.displayValue = choice.value;
                //             } else {
                //                 scope.ngModel = "";
                //                 scope.displayValue = "";
                //             }

                //             if (scope.ngPicked) {
                //                 scope.ngPicked(choice);
                //             }
                //         };

                //         scope.clearChoice = function clearChoice() {
                //             var choice = _.find(scope.ngOptions, { key: scope.ngModel });
                //             scope.search.term = choice.value;
                //             scope.ngModel = "";
                //             scope.searchString(scope.search.term);
                //             $timeout(function () {
                //                 $('#' + scope.id).focus();
                //             }, 0);
                //         };

                //         scope.keydown = function keydown(event) {
                //             switch (event.which) {
                //                 case 13: // ENTER
                //                     var choice = scope.search.results[scope.state.hiliteIndex];
                //                     scope.pickChoice(choice);
                //                     event.preventDefault();
                //                     break;
                //                 case 38: // ARROW UP
                //                     if (scope.state.hiliteIndex > 0) {
                //                         scope.state.hiliteIndex -= 1;
                //                     } else {
                //                         scope.state.hiliteIndex = scope.search.results.length - 1;
                //                     }
                //                     scrollToSelectedItem(scope.state.hiliteIndex);
                //                     break;
                //                 case 40: // ARROW DOWN
                //                     if (scope.state.hiliteIndex < (scope.search.results.length - 1)) {
                //                         scope.state.hiliteIndex += 1;
                //                     } else {
                //                         scope.state.hiliteIndex = 0;
                //                     }
                //                     scrollToSelectedItem(scope.state.hiliteIndex);
                //                     break;
                //                 case 27: // ESCAPE
                //                     scope.search.results.length = 0;
                //                     scope.search.term = "";
                //                     break;
                //             }
                //         };

                //         function scrollToSelectedItem(hiliteIndex) {
                //             var item = document.getElementById('result-' + hiliteIndex);
                //             var itemHeight = item.offsetHeight;
                //             var itemTop = item.offsetTop;

                //             var elem = document.getElementById('results');
                //             var elemHeight = elem.offsetHeight;

                //             if ((itemHeight + itemTop) > elemHeight) {
                //                 elem.scrollTop = (itemHeight + itemTop) - elemHeight;
                //             }

                //             if (itemTop < elem.scrollTop) {
                //                 elem.scrollTop = 0;
                //             }
                //         }

                //         // --- Bind to Scope Events. ------------------------------------ //

                //         scope.$watch('ngOptions', function onChoicesChange(newValue, oldValue) {
                //             var diff = _.compareArraysOfObjects(newValue, oldValue, "key");

                //             if (diff.length > 0) {
                //                 if (newValue.length > 0) {
                //                     scope.disabled = false;
                //                     if (scope.search.term.length > 0) {
                //                         scope.searchString(scope.search.term);
                //                     }
                //                 } else {
                //                     scope.disabled = true;
                //                 }
                //             }
                //         });

                //         eventsService.subscribe('autocomplete.clear', function clearAutocomplete() {
                //             scope.search.term = "";
                //             scope.search.results.length = 0;
                //         });


                //         // --- Initialize. ---------------------------------------------- //

                //         initialize();
                //     }
                // };


                // return {
                //     restrict: 'E',
                //     replace: true,
                //     templateUrl: '/assets/location-picker-widget/views/directives/location-picker-autocomplete.htm',
                //     controller: 'akit.component.locationPickerWidget.locationPickerAutocompleteController',
                //     controllerAs: 'autocomplete',
                //     scope: {
                //         data: '='
                //     }
                // };

            }
        ]);

})(window.angular);
