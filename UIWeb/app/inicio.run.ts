((): void => {
    'use strict';

    angular
        .module('inicio')
        .run(run);

    run.$inject = [
        '$rootScope',
        '$location',
        '$window'
    ];
    function run(
        $rootScope: ng.IRootScopeService,
        $location: ng.ILocationService,
        $window: ng.IWindowService,
        localStorageService: ng.local.storage.ILocalStorageService
    ): void {
    }
})(); 