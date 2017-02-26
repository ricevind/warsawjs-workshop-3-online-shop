/**
 * Created by ricevind on 26.02.17.
 */

(function() {
    "use strict";


    class checkoutController {
        constructor(CartService){
            this.cartService = CartService;
        }

        $onInit() {
            this.cart = this.cartService.getCart();
            this.cartService.onUpdate(
                (cart) => {
                    this.cart = cart;
                }
            );
        }

        deleteItem({itemToDelete}) {
            this.cartService.remove(itemToDelete);
        }

    }



    angular
        .module('shop')
        .component('checkout', {
            controller: checkoutController,
            template: `
                <div>
                    <ul class="collection with-header">
                        <li class="collection-header">
                            <span class="title">Nazwa</span>
                            <span class="price">Cena</span> 
                            <span class="quantity">Ilość</span>
                            <span class="overallPrice">Całkowita cena</span> 
                        </li>
                        <li class="collection-item" ng-repeat="item in $ctrl.cart"><checkout-item  item="item" on-delete-item="$ctrl.deleteItem($event)"></checkout-item> </li>  
                    </ul>
                    <checkout-summary items="$ctrl.cart"></checkout-summary>
                </div>
                `
        });

})();