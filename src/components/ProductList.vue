<template>
    <div>
      <cart></cart>
      <table>
        <thead>
          <th>Название</th>
          <th>Цена</th>
          <th></th>
        </thead>
        <tbody>
          <tr v-for="item in product" :key="item.id">
            <td>{{ item.title }}</td>
            <td>{{ item.price.toFixed(2) }}</td>
            <td>
              <button @click.prevent="addToCart(item)" class="button is-success">Добавить в корзину</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>

import cart from './Cart.vue'

export default {
  name: 'product-list',
  components: {
    cart
  },
  computed: {
    product() {
      return this.$store.getters.GET_PRODUCTS
    }

  },
  methods: {
    addToCart(item) {
      this.$store.commit('ADD_TO_CART', item)
    }
  }
}
</script>

<style scoped>

</style>