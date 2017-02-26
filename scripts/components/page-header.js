/**
 * Created by ricevind on 05.02.17.
 */

(function() {
  'use strict'

  angular
    .module('shop')
    .component('pageHeader', {
      template: `<header>
                    <nav class="blue lighten-3">
                      <div class="nav-wrapper">
                        <a class="brand-logo left">Sklep internetowy</a>
                        <ul class="right">
                            <li><a ui-sref="products">VIEW PRODUCTS</a></li>
                            <li><cart-dropdown></cart-dropdown></li>
                        </ul>
                      </div>
                      
                    </nav>
                  </header>`
    })
})();/**
 * Created by ricevind on 05.02.17.
 */
