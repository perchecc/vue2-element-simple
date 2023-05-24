import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      key: 'vu2-cms-template' // TODO 自行替换为缓存名
    })
  ],
})
