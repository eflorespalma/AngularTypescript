module inicio.item {
    'use strict'

    export interface IITemScope {
        listItems: app.common.IItem[];
    }

    class ItemController implements IITemScope {
        listItems: app.common.IItem[];

        static $inject = [
            '$window',
            '$location',
            'inicio.services.ItemService',
            'toastr',
            '$q'
        ];

        constructor(
            private $window: ng.IWindowService,
            private $location: ng.ILocationService,
            private itemService: services.IItemService,
            private claimMessage: angular.toastr.IToastrService,
            private $q: ng.IQService
        ) {
            this.initialize();
        }

        initialize(): void {
            this.loadItems();
        }

        loadItems(): void {
            var vm = this;
            this.itemService.getListItems().then(function (data) {
                if (data == null)
                    vm.claimMessage.error("Hubo un problema al Obtener los Items.", "Error");
                else
                    vm.listItems = data;
            }, function (error) {
                vm.claimMessage.error(error.data.exceptionMessage, "Error");
            });
        }
    }

    angular
        .module('inicio.item')
        .controller('inicio.item.ItemController',
        ItemController);
} 