<template>
  <div>
    <div class="home">
      <br>
      <h3>Джинсы</h3>
      <div class="home1">
        <div class="goods">
          <div class="goods_margin" v-for="JeansGood in JeansGoods" :key='JeansGood.id'>
            <router-link to="/ProductPage"><div @click="loadProduct(JeansGood.id)">
              <div class="image">
              <img v-bind:src="JeansGood.photo" height="100%" width="100%">
            </div>
            <div class="text">
              <div class="discount_price"> {{ JeansGood.discount }} <div class="old_price"> {{ JeansGood.oldPrice }}</div></div>
              <div class="price">{{ JeansGood.price }}</div>
              <div class="brand_name">{{ JeansGood.brand }}</div>
              <div class="name">{{ JeansGood.name }}</div><div class="flag" v-if="JeansGood.discount">{{ JeansGood.discountPercent }}%<br></div>
            </div>
            </div></router-link>
        </div>
        <router-view/>
      </div>
    </div>
      <br><br>
  </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Jeans',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      JeansGoods: 'JeansGoods'
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
