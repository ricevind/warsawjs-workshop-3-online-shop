/**
 * Created by ricevind on 05.02.17.
 */


(function() {
  'use strict';

  class ProductsList {
    constructor(ProductsService) {
      this.productsService = ProductsService;
    }

    $onInit() {
      this.selectedPage = 0;
      this.page = 1;
      this._getProducts();
    }

    $onChanges(changes) {
      if (!(changes.query.isFirstChange())) {
        this._getProducts()
      }

    }

    selectPage(index) {
      this.selectedPage = index;
      this.page = index+1;
      this._getProducts();
      this.onPageSelect({
        $event:
          {
            page:this.page
          }
      });
    }

    isSelected(index) {
      return index === this.selectedPage;
    }

    _getRange(n) {
      let p = Math.floor(n / 6) + 1;
      return new Array(p);
    }

    _makePromise({page,name}) {
      return this.productsService.get({
        page:this.page,
        name: this.query
      });
    }

    _getProducts() {
        let queries = {
          pages:this.pages,
          query:this.query
        };
        let productsPromise = this._makePromise(queries);
        productsPromise.then(data => {
          this.pages = this._getRange(data.headers('X-Total-Count'));
          this.products = data.data;
          if (this.products.length < 1) {
            this.page = 1;
            this.selectedPage = 0;
            this._getProducts();
            this.onPageSelect({
              $event:
                {
                  page:this.page
                }
            });
          }
        });

      }
  }

  angular
    .module('shop')
    .component('productsList', {
      bindings: {
        query: '<',
        onPageSelect: '&'
      },
      template: `
                <ul class="pagination">
                  <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                  <li class="ng-class:{active:$ctrl.isSelected($index)}" 
                      ng-repeat="item in $ctrl.pages track by $index">
                    <a ng-click="$ctrl.selectPage($index)">{{ $index+1}}</a>
                   </li>
                  <li class="disabled"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                </ul>
                <form class="col s12">
                  <div class="row">
                      <div class="input-field col s6 offset-s6">
                          <input ng-model="searchText" id="product-name"
                              type="text"
                              placeholder="Filtruj po nazwie" />
                      </div>
                  </div>
                </form>
                <div class="col s4" ng-repeat="product in $ctrl.products | filter:{name:searchText}  track by product.id">
                  <product class="row" data="product"></product>
                </div>`,
      controller: ProductsList
    })
})();