(function () {
    'use strict';
    angular
        .module('inicio.item')
        .config(config);
    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];
    function config($routeProvider, $locationProvider) {
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
//# sourceMappingURL=item.route.js.map