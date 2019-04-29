// localStorage
let cart = window.localStorage.getItem('cart');

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import shopCart from './store/cart.js'
import books from './store/books.js'

export default new Vuex.Store({
  modules: {
    shopCart,
    books
  },
  state: {
    cart : cart ? JSON.parse(cart) : [] 
  },
  mutations: {
    SAVE_CART(state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  }
})
