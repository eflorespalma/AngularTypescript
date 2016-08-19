((): void => {
    'use strict';

    angular
        .module('inicio.item')
        .config(config);

    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];
    function config(
        $routeProvider: ng.route.IRouteProvider,
        $locationProvider: ng.ILocationProvider): void {
        $routeProvider
            .when('/item', {
                templateUrl: 'app/configuration/item/item.html',
                controller: 'inicio.configuration.ItemController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/item'
            });
    }
})(); 
