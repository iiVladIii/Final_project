<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><div class="link" v-if="link_1" @click="changeBackColor (1)" style="background: #e2e2e2;"><br>Все товары</div><div v-if="link_1_1" @click="changeBackColor (1)" class="link" style="background: #FFFFFF"><br>Все товары</div></router-link>
      <router-link to="/T-Shirts"><div class="link" v-if="link_2" @click="changeBackColor (2)" style="background: #e2e2e2;"><br>Футболки</div><div v-if="link_2_1" @click="changeBackColor (2)" class="link" style="background: #FFFFFF"><br>Футболки</div></router-link>
      <router-link to="/Jeans"><div class="link" v-if="link_3" @click="changeBackColor (3)" style="background: #e2e2e2"><br>Джинсы</div><div v-if="link_3_1" @click="changeBackColor (3)" class="link" style="background: #FFFFFF"><br>Джинсы</div></router-link><br><br>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      link_1: true,
      link_2: false,
      link_3: false,
      link_1_1: false,
      link_2_1: true,
      link_3_1: true
    }
  },
  computed: {
  },
  methods: {
    changeBackColor (k) {
      switch (k) {
        case 1:
          this.link_1 = true
          this.link_2 = false
          this.link_3 = false
          this.link_1_1 = false
          this.link_2_1 = true
          this.link_3_1 = true
          break
        case 2:
          this.link_1 = false
          this.link_2 = true
          this.link_3 = false
          this.link_1_1 = true
          this.link_2_1 = false
          this.link_3_1 = true
          break
        case 3:
          this.link_1 = false
          this.link_2 = false
          this.link_3 = true
          this.link_1_1 = true
          this.link_2_1 = true
          this.link_3_1 = false
          break
      }
    }
  }
}
</script>

<style lang="scss">
.img_1{
  width:200%;
  height: auto;
}
.Product_Page{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 100%;
  margin-top: 10%;
  .Product_Page_Description {
    grid-column: 3/7;
    margin-left: 10%;
    margin-top: 5%;
    align-items: center;
    .Product_Page_Description_discount_price_text {
      .discount_price {
        text-align: left;
        font-size: 1.3vw;
        color: #BB181E;
        margin-left: 3%;
      }

      .old_price {
        text-align: left;
        font-family: 'Montserrat', sans-serif;
        font-size: 1vw;
        color: #888888;
        text-decoration: line-through;
        margin-left: 5%;
      }

      .brand_name {
        text-align: left;
        font-size: 0.9vw;
        color: #858585;
      }

      .name {
        text-align: left;
        font-size: 1.3vw;
        color: #2F2F2F;
      }

      .price {
        text-align: left;
        font-size: 1.3vw;
        color: #BB181E;
      }
      .flag {
        font-size: 1.2vw;
        float: right;
        background-color: #CC0007;
        color: #F7E6E7;
      }
      .cart {
        margin-top: 5%;
        button {
          border: none;
          outline: none;
          background-color: #D22E30;
          color: white;
          height: 2.5vw;
          width: 35%;
          font-size: 1vw;
        }
        button:hover {
          background-color: #ff5555;
        }
        button:active {
          background-color: #CC0007;
        }
      }
      .description {
        margin-top: 10%;
        .description_div {
          font-size: 0.9vw;
          color: #888888;
          float: left;
          .description_div_text {
            text-align: left;
            color: black;
            float: right;
          }
        }
      }
    }
  }
}
h3 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: left;
  font-size: 1.5vw;
  margin-left: 5%;
}
.text {
  .discount_price {
    text-align: left;
    font-size: 1.3vw;
    color: #BB181E;
  }

  .old_price {
    font-family: 'Montserrat', sans-serif;
    margin-top: 1%;
    float: right;
    font-size: 1vw;
    color: #888888;
    text-decoration: line-through;
  }

  .brand_name {
    text-align: left;
    font-size: 0.9vw;
    color: #858585;
  }

  .name {
    margin-top: 5%;
    text-align: left;
    font-size: 1vw;
    color: #2F2F2F;
  }

  .price {
    text-align: left;
    font-size: 1.3vw;
    font-family: 'Montserrat', sans-serif;
    color: #3C3C3C;
  }
  .flag {
    font-size: 1.2vw;
    float: right;
    background-color: #CC0007;
    color: #F7E6E7;
  }
}
.home{
  background-color: #e2e2e2;
  text-align: left;
}
.home1 {
  margin-left: 15%;
  margin-right: 15%;
}
.goods {
  a {
    text-decoration: none;

    &.router-link-exact-active {
    }
  }
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  .goods_margin {
    margin: 10% 5% 0 5%;
  }
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #FFFFFF;
}

#nav {
  height: 2.5vw;
  .link {
  height:2.5vw;
  width: 6vw;
  float: left
}
  padding-left: 10%;
  a {
    font-size: 1vw;
    text-decoration: none;
    font-weight: bold;
    color: #717171;

    &.router-link-exact-active {
      color:#717171;
      background-color: #e2e2e2;
    }
  }
}
</style>
