(function (ng) {
    'use strict';

    ng
        .module('akit.component.locationPickerWidget')
        .service('akit.component.locationPickerWidget.locationPickerService', [
            '$http',
            // '$interval',
            // '$q',
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

// @ts-ignore
})(window.angular);
