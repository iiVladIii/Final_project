<template>
  <div class="home">
    <br>
    <h3>Все товары</h3>
    <div class="home1">
  <div class="goods">
  <div class="goods_margin" v-for="good in goods" :key='good'>
    <router-link to="/ProductPage"> <div @click="loadProduct(good.id)"> <div class="image">
        <img v-bind:src="good.photo" height="100%" width="100%">
      </div>
      <div class="text">
        <div class="discount_price"> {{ good.discount }} <div class="old_price"> {{ good.oldPrice }}</div></div>
       <div class="price">{{ good.price }}</div>
        <div class="brand_name">{{ good.brand }}</div>
        <div class="name">{{ good.name }}</div> <div class="flag" v-if="good.discount">{{ good.discountPercent }}%</div>
      </div>
    </div> </router-link>
  </div>
  </div>
    <router-view/>
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
