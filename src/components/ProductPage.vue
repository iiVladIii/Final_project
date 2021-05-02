<template>
  <div class="home">
    <br>
    <div class="home1">
<div class="Product_Page">
  <div class="img"><img class="img_1" :src="product.photo"></div>
  <div class="Product_Page_Description">
    <div class="Product_Page_Description_discount_price_text">
      <div class="name">{{ product.name }}</div>
      <p class="brand_name">Бренд: {{ product.brand }}</p>
      <div class="old_price">{{ product.oldPrice }}</div>
      <div class="discount_price"> {{ product.discount}}</div>
      <p class="price">{{ product.price }}</p>
      <div class="cart">
        <button @click="message()">Добавить в корзину</button>
      </div>
      <div class="description">
        <div class="description_div">
          О товаре:<br><br>
          <div class="description_div">Пол<div class="description_div_text">: {{ product.description_1 }}</div></div><br><br>
          <div class="description_div">Цвет<div class="description_div_text">: {{ product.color }}</div></div><br><br>
          <div class="description_div">Материал<div class="description_div_text">: {{ product.material }}</div></div><br><br>
          <div class="description_div">Модель(тип)<div class="description_div_text">: {{ product.model }}</div></div><br><br>
          <div class="description_div"> Сезон<div class="description_div_text">: {{ product.yearTime }}</div></div><br><br>
          <div class="description_div"> Артикул<div class="description_div_text">: {{ product.articul }}</div></div><br><br>
          <div class="description_div">Страна-производитель<div class="description_div_text">: {{ product.country }}</div></div>
        </div>
      </div>
    </div>
    </div>
</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'T-Shirt',
  data () {
    return {}
  },
  methods: {
    message () {
      alert('Функция временно недоступна')
    }
  },
  computed: {
    ...mapState({
      product: 'product'
    })
  }
}
</script>

<style scoped>

</style>
