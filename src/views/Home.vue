<template>
  <div class="home">
    <br>
    <h3>Все товары</h3>
    <div class="home1">
  <div class="goods">
  <div class="goods_margin" v-for="product in goods" :key="product.id">
    <router-link to="/ProductPage"> <div @click="loadProduct(product.id)"> <div class="image">
        <img v-bind:src="product.photo" height="100%" width="100%">
      </div>
      <div class="text">
        <div class="discount_price"> {{ product.discount }} <div class="old_price"> {{ product.oldPrice }}</div></div>
       <div class="price">{{ product.price }}</div>
        <div class="brand_name">{{ product.brand }}</div>
        <div class="name">{{ product.name }}</div> <div class="flag" v-if="product.discountPercent">{{ product.discountPercent }}%</div>
      </div>
    </div> </router-link>
  </div>
  </div>
    <router-view/>
      <br><br>
  </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      goods: 'goods'
    })
  },
  methods: {
    ...mapActions({
      loadGoods: 'getGoods',
      getTypeOfGoods: 'getTypeOfGoods',
      loadProduct: 'loadProduct'
    })
  },
  mounted () {
    this.loadGoods()
    this.getTypeOfGoods()
  }
}
</script>
