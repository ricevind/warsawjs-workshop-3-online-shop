(function() {
  'use strict';

  angular.module('shop')
    .component('app', {
      template: `
        <section class="container">
          <page-header></page-header>
          <a href="#!/products">VIEW PRODUCTS</a>
          <div ui-view="content"></div>
          <page-footer></page-footer>
        </section>
      `
    })
}());
