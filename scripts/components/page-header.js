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
                        <cart-dropdown></cart-dropdown>
                      </div>
                      
                    </nav>
                  </header>`
    })
})();/**
 * Created by ricevind on 05.02.17.
 */
