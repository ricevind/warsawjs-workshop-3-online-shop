/**
 * Created by ricevind on 05.02.17.
 */
/**
 * Created by ricevind on 05.02.17.
 */

(function() {
  'use strict';

  class ProductsController {
      $onInit() {
        }

      queryChange($event) {
         this.query = $event.query;
      }

      pageSelect($event) {
        this.page = $event.page;
        console.log('product', this.page)
      }
  }

  angular
    .module('shop')
    .component('products', {
      template: `
            <product-search query="$ctrl.query"
                            on-query-change="$ctrl.queryChange($event)">
            </product-search>
            <products-list class="row" query="$ctrl.query" on-page-select="$ctrl.pageSelect($event)">
              <div class="progress">
                  <div class="indeterminate"></div>
              </div>
          </products-list>`,
    controller: ProductsController
    })
})();