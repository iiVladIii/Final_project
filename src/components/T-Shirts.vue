<template>
<div>
  <div class="home">
    <br>
    <h3>Футболки</h3>
    <div class="home1">
      <div class="goods">
        <div class="goods_margin" v-for="TShirt in TShirts" :key='TShirt'>
          <router-link to="/ProductPage"> <div @click="loadProduct(TShirt.id)">
            <div class="image">
            <img v-bind:src="TShirt.photo" height="100%" width="100%">
          </div>
          <div class="text">
            <div class="discount_price"> {{ TShirt.discount }} <div class="old_price"> {{ TShirt.oldPrice }}</div></div>
            <div class="price">{{ TShirt.price }}</div>
            <div class="brand_name">{{ TShirt.brand }}</div>
            <div class="name">{{ TShirt.name }}</div> <div class="flag" v-if="TShirt.discount">{{ TShirt.discountPercent }}%</div>
          </div>
        </div></router-link>
      </div>
      <router-view/>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'T-Shirts',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      goods: 'goods',
      TShirts: 'TShirtGoods'
    })
  },
  methods: {
    ...mapActions({
      loadProduct: 'loadProduct'
    })
  }
}
</script>

<style scoped>

</style>
