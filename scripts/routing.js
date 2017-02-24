(function() {
  'use strict';

  angular.module('shop')
    .config(function($stateProvider,$urlRouterProvider) {
      $stateProvider
        .state({
          name: 'root',
          url: '',
          template: '<app></app>'
        })
        .state({
          parent:'root',
          name: 'products',
          url: '/products/:page?query',
          views: {
            content: {
              template: `
                  <products></products>
                `
            }
          }
        });

      $urlRouterProvider.otherwise('/products/1');
    });
}());
