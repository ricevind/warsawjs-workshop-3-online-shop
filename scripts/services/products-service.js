/**
 * Created by ricevind on 05.02.17.
 */

(function(window){
  'use strict'

  const HOST_NAME = window.location.hostname;
  const PORT = 2095;
  const URL = `http://${HOST_NAME}:${PORT}/products`;
  const PRODUCTS_PER_PAGE = 6;


  class ProductsService {

    constructor($http) {
      this.$http = $http;
    }

    get({ page, name } = {}) {
      let params = {};

      if (page) {
        params._page = page;
        params._limit = PRODUCTS_PER_PAGE;
      }

      if (name) {
        params.name_like = name;
        console.log(name)
      }

      return this.$http.get(URL, { params });
    }

  }

  angular
    .module('shop')
    .service('ProductsService', ProductsService);

})(window);