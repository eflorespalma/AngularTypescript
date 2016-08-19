(function () {
    'use strict';
    angular
        .module('app.blocks')
        .config(config);
    config.$inject = ['app.blocks.ApiEndpointProvider'];
    function config(apiEndpointProvider) {
        apiEndpointProvider.configure('http://localhost:63345/api');
    }
})();
//# sourceMappingURL=apiendpoint.config.js.map