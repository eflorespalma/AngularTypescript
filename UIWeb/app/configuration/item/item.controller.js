var inicio;
(function (inicio) {
    var item;
    (function (item) {
        'use strict';
        var ItemController = (function () {
            function ItemController($window, $location, itemService, claimMessage, $q) {
                this.$window = $window;
                this.$location = $location;
                this.itemService = itemService;
                this.claimMessage = claimMessage;
                this.$q = $q;
                this.initialize();
            }
            ItemController.prototype.initialize = function () {
                this.loadItems();
            };
            ItemController.prototype.loadItems = function () {
                var vm = this;
                this.itemService.getListItems().then(function (data) {
                    if (data == null)
                        vm.claimMessage.error("Hubo un problema al Obtener los Items.", "Error");
                    else
                        vm.listItems = data;
                }, function (error) {
                    vm.claimMessage.error(error.data.exceptionMessage, "Error");
                });
            };
            ItemController.$inject = [
                '$window',
                '$location',
                'inicio.services.ItemService',
                'toastr',
                '$q'
            ];
            return ItemController;
        }());
        angular
            .module('inicio.item')
            .controller('inicio.item.ItemController', ItemController);
    })(item = inicio.item || (inicio.item = {}));
})(inicio || (inicio = {}));
//# sourceMappingURL=item.controller.js.map