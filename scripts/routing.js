(function () {
    'use strict';

    angular.module('shop')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state({
                    name: 'root',
                    url: '',
                    template: '<app></app>'
                })
                .state({
                    parent: 'root',
                    name: 'products',
                    url: '/products/:page?query',
                    views: {
                        content: {
                            template: '<products></products>'
                        }
                    }
                })
                .state({
                    parent: 'root',
                    name: 'checkout',
                    url: '/checkout',
                    views: {
                        content: {
                            template: '<checkout></checkout>'
                        }
                    }
                });

            $urlRouterProvider.otherwise('/products/1');
        });
}());

