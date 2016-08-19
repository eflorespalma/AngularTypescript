var inicio;
(function (inicio) {
    var services;
    (function (services) {
        'use strict';
        var ItemService = (function () {
            function ItemService($http, apiEndpoint) {
                this.$http = $http;
                this.apiEndpoint = apiEndpoint;
            }
            ItemService.prototype.getListItems = function () {
                return this.$http
                    .get(this.apiEndpoint.baseUrl + '/configuration/GetListadoItems')
                    .then(function (response) {
                    return response.data;
                });
            };
            return ItemService;
        }());
        factory.$inject = [
            '$http',
            'app.blocks.ApiEndpoint'
        ];
        function factory($http, apiEndpoint) {
            return new ItemService($http, apiEndpoint);
        }
        angular
            .module('inicio.services')
            .factory('inicio.services.ItemService', factory);
    })(services = inicio.services || (inicio.services = {}));
})(inicio || (inicio = {}));
//# sourceMappingURL=item.service.js.map