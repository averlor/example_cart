import Vue from 'vue'

export default{
    state: {
        cart: [],
        countCart: 0
    },

    getters: {
        GET_CART: state => state.cart,
        CART_COUNT: state => state.countCart
    },

    mutations: {
        ADD_TO_CART(state, payload) {
            let found = state.cart.find(product => product.id === payload.id);

            if (found) {
                found.quantity ++;
                found.totalPrice = found.quantity * found.price
            } else {
                state.cart.push(payload)

                Vue.set(payload, 'quantity', 1);
                Vue.set(payload, 'totalPrice', payload.price)
            }

            state.countCart++;
            this.commit('SAVE_CART');
        },
        REMOVE_FROM_CART(state, payload) {
            let index = state.cart.indexOf(payload);

            if (index > -1) {
                let product = state.cart[index]
                state.countCart -= product.quantity;
                state.cart.splice(index, 1)
            }

            this.commit('SAVE_CART');
        }
    },

    actions: {

    }
}