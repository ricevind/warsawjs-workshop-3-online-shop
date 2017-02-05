/**
 * Created by ricevind on 05.02.17.
 */

(function() {
  'use strict';

  class CartDropdownController {
    constructor( CartService) {
      this.cartService = CartService;
    }

    $onInit() {
      this.cart = this.cartService.getCart();
      this.cartSize =this.cartService.getCartSize();

      this.cartService.onUpdate(this.onChange.bind(this));

    }

    clearCart() {
      this.cartService.clearCart();
    }

    onChange(newCart) {
      this.cart = newCart;
      this.cartSize =this.cartService.getCartSize();
    }

  }

  angular
    .module('shop')
    .component('cartDropdown', {
      template: `
                  <ul class="right">
                    <li>
                      <a class="dropdown-button" href="">
                          {{ $ctrl.cartSize }}
                        <i class="material-icons right">arrow_drop_down</i>
                      </a>
                              
                      <ul id="cart-dropdown-list" class="dropdown-content">
                        <li ng-repeat="item in $ctrl.cart ">
                          <a href="">
                            {{ item.product.name }}
                            <span class="badge right">
                              {{ item.quantity }}
                            </span>
                          </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                          <a ng-click="$ctrl.clearCart()" href="">Wyczyść koszyk</a>
                        </li>
                        <!-- POKAZ GDY KOSZYK NIE JEST PUSTY -->
                        <li>
                          <a ui-sref="checkout">Kasa</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  `,
      controller: CartDropdownController

    })
})();