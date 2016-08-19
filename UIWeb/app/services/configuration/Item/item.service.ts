module inicio.services {
    'use strict';

    export interface IItemService {
        getListItems(): ng.IPromise<app.common.IItem[]>;
    }

    class ItemService implements IItemService {
        constructor(private $http: ng.IHttpService,
            private apiEndpoint: app.blocks.IApiEndpointConfig) { }

        getListItems(): ng.IPromise<app.common.IItem[]> {
            return this.$http
                .get(this.apiEndpoint.baseUrl + '/configuration/GetListadoItems')
                .then((response: ng.IHttpPromiseCallbackArg<app.common.IItem[]>): app.common.IItem[] => {
                    return <app.common.IItem[]>response.data;
                });
        }
    }

    factory.$inject = [
        '$http',
        'app.blocks.ApiEndpoint'
    ];
    function factory($http: ng.IHttpService,
        apiEndpoint: app.blocks.IApiEndpointConfig): IItemService {
        return new ItemService($http, apiEndpoint);
    }

    angular
        .module('inicio.services')
        .factory('inicio.services.ItemService',
        factory);
}