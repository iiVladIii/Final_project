import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    x: 0,
    product: [],
    start: true,
    i: 0,
    goods: [],
    TShirtGoods: [],
    JeansGoods: []
  },
  mutations: {
    SET_GOODS (state, payload) {
      if (this.state.x === 0) {
        state.goods = payload
        this.state.x = 1
      }
    },
    SET_PRODUCT (state, payload) {
      state.product = payload
    },
    TYPE () {
      if (this.state.start === true) {
        for (this.state.i = 0; this.state.i < 100; this.state.i++) {
          switch (this.state.goods[this.state.i].type) {
            case 'T-shirt':
              this.state.TShirtGoods.push(this.state.goods[this.state.i])
              break
            case 'Jeans':
              this.state.JeansGoods.push(this.state.goods[this.state.i])
              this.state.start = false
              break
          }
        }
      }
      this.state.start = false
    }
  },
  actions: {
    getGoods ({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get('http://localhost:3000/goods')
          .then(response => {
            commit('SET_GOODS', response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getTypeOfGoods ({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get('http://localhost:3000/goods')
          .then(response => {
            commit('TYPE', response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    loadProduct ({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:3000/goods/${id}`)
          .then(response => {
            commit('SET_PRODUCT', response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  modules: {}
})
