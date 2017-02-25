(function(){
    'use strict';

    class ProductSearch {

        constructor($state, $stateParams) {
            this.$state = $state;
            this.$stateParams = $stateParams;
        }

        $onInit() {
            this.query = this.$stateParams.query || '';
        }

        onChange() {
            this.$state.go('products',{'query': this.query}, {notify:false});
            this.onQueryChange({
              $event:{
                query:this.query
              }
            })
        }
    }

    angular
        .module('shop')
        .component('productSearch', {
            bindings: {
                onQueryChange:'&'
            },
            controller: ProductSearch,
            template: `
                        <nav class="blue lighten-1">
                            <div class="nav-wrapper">
                                <form>
                                    <div class="input-field">
                                        <input id="search"
                                                type="search"
                                                placeholder="Wpisz nazwę produktu..."
                                                ng-model="$ctrl.query"
                                                ng-change="$ctrl.onChange()"
                                                ng-model-options="{debounce: 500}" />
                                        <label for="search">
                                            <i class="material-icons">search</i>
                                        </label>
                                        <i class="material-icons" ng-click="$ctrl.clearSearch()">close</i>
                                    </div>
                                </form>
                            </div>
                        </nav>
                    `
        });

}());