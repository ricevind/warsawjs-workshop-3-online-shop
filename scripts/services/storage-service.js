/**
 * Created by ricevind on 05.02.17.
 */

(function(window){
  'use strict';

  const KEY = 'shop';

  class StorageService {

    constructor() {

    }

    read(name=KEY) {
      try {
        return JSON.parse(window.localStorage.getItem(name));
      }
      catch(err) {
        console.log(err);
        return {};
      }
    }

    save(data, name=KEY) {
      try {
        let serializedData = JSON.stringify(data);
        window.localStorage.setItem(name, serializedData);
        return 1;
      }
      catch(err) {
        console.log(err);
        return -1;
      }
    }
  }

  angular
    .module('shop')
    .service('StorageService', StorageService);

})(window);