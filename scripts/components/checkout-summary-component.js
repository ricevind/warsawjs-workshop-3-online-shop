/**
 * Created by ricevind on 26.02.17.
 */

(function() {
    "use strict";


    class checkoutSummaryController {

        $onInit() {
            this.sum = this._doSummary(this.items);
        }

        $onChanges(changes) {
            if (changes.items) {
                this.sum = this._doSummary(changes.items.currentValue);
            }
        }

        _doSummary(items) {
            let sum = items.reduce((acc, curr) => acc + parseInt(curr.product.price, 10)*curr.quantity , 0)
            return sum;
        }

    }



    angular
        .module('shop')
        .component('checkoutSummary', {
            controller: checkoutSummaryController,
            template: `

<ul class="collection with-header">
        <li class="collection-header center-align">Podsumowanie</li>
        <li class="collection-item"><div class="center-align"><span>{{$ctrl.sum | plnCurrency }}</span><a ui-sref="products" class="secondary-content"><i class="material-icons">send</i></a></div></li>
        </ul>
`,
            bindings: {
                'items': '<'
            }
        });

})();