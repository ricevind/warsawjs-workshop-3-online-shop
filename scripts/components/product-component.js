/**
 * Created by ricevind on 05.02.17.
 */


(function() {
  'use strict';

  angular
    .module('shop')
    .component('product', {
      bindings: {
        data: '<'
      },
      template: `<div class="card small blue-grey darken-1">
                  <div class="card-content white-text">
                      <h6 class="card-title" ng-bind="$ctrl.data.name"></h6>
                      <p ng-bind="$ctrl.data.description"></p>
                      <h5 class="product-price" >Cena: <span ng-bind="$ctrl.data.price | plnCurrency"></span></span> </h5>
                  <div class="card-action">
                      <product-add-to-cart></product-add-to-cart>
                  </div>
                  
                  </div>
                  
              </div>`
    })
})();