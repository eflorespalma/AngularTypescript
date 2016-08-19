(function () {
    'use strict';
    angular
        .module('inicio')
        .run(run);
    run.$inject = [
        '$rootScope',
        '$location',
        '$window'
    ];
    function run($rootScope, $location, $window, localStorageService) {
    }
})();
//# sourceMappingURL=inicio.run.js.map