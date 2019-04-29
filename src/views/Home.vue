<template>
  <div class="home">
    <Product/>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from '@/components/ProductList.vue'

export default {
  name: 'home',
  components: {
    Product
  }
}
</script>
