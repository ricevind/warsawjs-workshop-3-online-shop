/**
 * Created by ricevind on 26.02.17.
 */

(function() {
    "use strict";


    class checkoutItemController {
        $onInit() {
            this.overallPrice = parseInt(this.item.product.price, 10) * this.item.quantity;
        }

        deleteItem(itemID) {
            this.onDeleteItem({
                $event: {
                    itemToDelete: itemID
                }
            });
        }
    }



    angular
        .module('shop')
        .component('checkoutItem', {
            controller: checkoutItemController,
            template: `
                <div>
                    <span class="title">{{$ctrl.item.product.name}}</span>
                    <span class="price">{{$ctrl.item.product.price | plnCurrency}}</span> 
                    <span class="quantity">{{$ctrl.item.quantity}}</span>
                    <span class="overallPrice">{{$ctrl.overallPrice | plnCurrency}}</span> 
                    
                    <div class="discard" 
                          ng-click="$ctrl.deleteItem($ctrl.item.product)">
                            <a class="waves-effect waves-teal btn-flat">DISCARD</a>
                    </div>
                </div>
                `,
            bindings: {
                item: '<',
                onDeleteItem: '&'
            }
        });

})();