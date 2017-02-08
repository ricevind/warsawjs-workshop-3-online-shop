/**
 * Created by ricevind on 05.02.17.
 */


(function() {
  'use strict';

  class ProductsList {
    constructor(ProductsService) {
      this.productsService = ProductsService;
    }

    $onInit() {
      let productsPromise = this.productsService.get({
        page:'',
        name: this.query
      });
      productsPromise.then((data) => {this.products = data.data});
    }

  }

  angular
    .module('shop')
    .component('productsList', {
      bindings: {
        query: '<'
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
                </div>`,
      controller: ProductsList
    })
})();