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
          this.query = "pan";
          console.log(this.query)
      }

      queryChange($event) {
         this.query = $event.query;
         console.log(this.query)
      }
  }

  angular
    .module('shop')
    .component('products', {
      template: `
            <product-search query="ctrl.query"
                            on-query-change="ctrl.queryChange($event)">
            </product-search>
            <products-list class="row" query="ctrl.query">
              <div class="progress">
                  <div class="indeterminate"></div>
              </div>
          </products-list>`,
    controller: ProductsController
    })
})();