((): void => {
    'use strict';

    angular.module('inicio', [
        'ngRoute',
        'toastr',
        'app.blocks',
        'inicio.item',
        'inicio.services'
    ]);
})();  
