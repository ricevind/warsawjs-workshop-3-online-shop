/**
 * Created by ricevind on 05.02.17.
 */


(function() {
  'use strict';

    angular
    .module('shop')
    .component('productsList', {
      bindings: {
        products: '<'
      },
      template: `
                <form class="col s12">
                  <div class="row">
                      <div class="input-field col s6 offset-s6">
                          <input ng-model="searchText" id="product-name"
                              type="text"
                              placeholder="Filtruj po nazwie" />
                      </div>
                  </div>
                </form>
                <div class="col s4" ng-repeat="product in $ctrl.products | filter:{name:searchText}  track by product.id">
                  <product class="row" data="product"></product>
                </div>`
    })
})();