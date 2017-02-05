/**
 * Created by ricevind on 05.02.17.
 */

(function() {
  'use strict';

  class ProductAddToCartComponentController {
    constructor(CartService) {
      this.quantity = 1;
      this.CartService = CartService;
    }

    onBlur() {
      if (this.quantity > 9) {
        this.quantity = 9;
      }

      if (this.quantity < 1) {
        this.quantity = 1;
      }
    }

    onSubmit() {
      this.CartService.add(this.parent.data, this.quantity);
    }
  }

  angular.module('shop')
    .component('productAddToCart', {
      template: `
        <form class="row" ng-submit="$ctrl.onSubmit()">
            <input type="submit" class="col s8 left btn white-text" value="Do koszyka" />
            <input type="text"
                max="9"
                min="1"
                class="col s3 right blue-grey lighten-5 black center-align"
                ng-model="$ctrl.quantity"
                ng-blur="$ctrl.onBlur()"
                required />
        </form>
      `,
      require: {
        parent: '^^product'
      },
      controller: ProductAddToCartComponentController
    });
}());
