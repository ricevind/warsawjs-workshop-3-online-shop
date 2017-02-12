/**
 * Created by ricevind on 05.02.17.
 */
/**
 * Created by ricevind on 05.02.17.
 */

(function() {
  'use strict';

  class ProductsController {
    constructor(ProductsService) {
      this.productsService = ProductsService;
    }

    $onInit() {
      this.page = 1;
      this.selectedPage = 0;
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
      let p = Math.floor(n / 6) + 1;
      return new Array(p);
    }

    _makePromise() {
      return this.productsService.get({
        page:this.page,
        name: this.query
      });
    }

    _getProducts() {
      let queries = {
        page:this.page,
        query:this.query
      };
      let productsPromise = this._makePromise();
      productsPromise.then(data => {
        this.pages = this._getRange(data.headers('X-Total-Count'));
        this.products = data.data;
        if (this.products.length < 1) {
          this.page = 1;
          this.selectedPage = 0;
          this._getProducts();
        }
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