<template>
    <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="">
            Корзина ({{ count }})
        </a>

        <div v-if="count > 0" class="navbar-dropdown is-boxed is-right">
            <a v-for="item in cart" :key="item.id" class="navbar-item" href="">
                
                <span class="removeBtn" title="Удалить" @click.prevent="removeFromCart(item)"></span>

                {{ item.title }} X {{ item.quantity }} - {{ item.totalPrice }}
            </a>

            <a class="navbar-item">
                Итого: ${{ totalPrice }}
            </a>

            <hr class="navbar-divider">

            <a class="navbar-item" href="">
                К оплате
            </a>
        </div>
    </div>
</template>

<script>

export default {
    name: 'cart',
    computed: {
        cart() {
            return this.$store.getters.GET_CART
        },
        count() {
            return this.$store.getters.CART_COUNT
        },
        totalPrice() {
            let total = 0;

            for (let item in this.cart) {
                total += item.totalPrice;
            }

            return total.toFixed(2);
        }
    },
    methods: {
        removeFromCart(item) {
            this.$store.commit('REMOVE_FROM_CART', item)
        }
    }
}
</script>

<style scoped>

</style>