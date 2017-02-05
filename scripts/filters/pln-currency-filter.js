/**
 * Created by ricevind on 05.02.17.
 */

(function() {
  'use strict';

  angular
    .module('shop')
    .filter('plnCurrency', function() {
      return function(input){
        let numInput = +input;
        let stringInput = numInput.toFixed(2).toString();
        let comInput = stringInput.replace('.', ',');
        return `${comInput} PLN`;
      }
    })

})();