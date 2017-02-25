/**
 * Created by ricevind on 05.02.17.
 */
/**
 * Created by ricevind on 05.02.17.
 */

(function() {
  'use strict';

  class ProductsController {
    constructor($stateParams, ProductsService) {
      this.productsService = ProductsService;
      this.$stateParams = $stateParams;
    }

    $onInit() {
      this.page = parseInt(this.$stateParams.page, 10) || 1;
      this.selectedPage = this.page - 1 || 0;
      this.query = this.$stateParams.query || '';
      this._getProducts();
    }

    queryChange($event) {
      this.query = $event.query;
      this._getProducts();
    }

    pageSelect($event) {
      this.page = $event.page;
      this.selectedPage = $event.selectedPage;
      this._getProducts();
    }

    _getRange(n) {
      let p = Math.floor(n / 6);
      let r = n < 6 ? 0 : n % 6;
      let pages = p < 1 ? 1 : p;
      let pages_rem = r > 0 ? pages + 1 : pages;
      return new Array(pages_rem);
    }

    _makePromise() {
      return this.productsService.get({
        page:this.page,
        name: this.query
      });
    }

    _getProducts() {
      let productsPromise = this._makePromise();
      productsPromise.then(data => {
        this.pages = this._getRange(data.headers('X-Total-Count'));
        this.products = data.data;
        if (this.products.length < 1) {
          this.page = 1;
          this.selectedPage = 0;
          this._getProductsOnce();
        }
      });
    }

      _getProductsOnce() {
          let productsPromise = this._makePromise();
          productsPromise.then(data => {
              this.pages = this._getRange(data.headers('X-Total-Count'));
              this.products = data.data;

          });
      }

  }

  angular
    .module('shop')
    .component('products', {
      template: `
            <product-search on-query-change="$ctrl.queryChange($event)"></product-search>
            <pagination pages="$ctrl.pages" 
                        on-page-select="$ctrl.pageSelect($event)" 
                        selected-page="$ctrl.selectedPage">
            </pagination>
            <products-list products="$ctrl.products" class="row"  >
              <div class="progress">
                  <div class="indeterminate"></div>
              </div>
          </products-list>`,
    controller: ProductsController
    })
})();