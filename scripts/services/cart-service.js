/**
 * Created by ricevind on 05.02.17.
 */

(function() {
  'use strict';

  class CartService {
    constructor(StorageService, EventHubService) {
      this.StorageService = StorageService;
      this.EventHubService = EventHubService;

      this._cart = this.StorageService.read() || [];
    }

    getCart() {
      return this._cart;
    }

    getCartSize() {
      return this._cart.length;
    }

    add(product, quantity) {
      quantity = parseInt(quantity, 10);

      let results = this._cart.find((item) => {
        return item.product.id === product.id
      });

      if (results) {
        results.quantity += quantity;
      } else {
        this._cart.push({
          quantity,
          product
        });
      }
      this._update();
    }

    remove(product) {
      this._cart = this._cart.filter((p) => p.product.id !== product.id);
      this._update();
    }

    clearCart() {
      this._cart = [];
      this._update();
    }

    onUpdate(callback) {
      this.EventHubService.on('cartUpdate', (payload) => callback(payload));
    }


    _update() {
      let cart = this._cart;
      this.StorageService.save(cart);
      this.EventHubService.emit('cartUpdate', cart);
    }

  }

  angular.module('shop')
    .service('CartService', CartService);
}());
