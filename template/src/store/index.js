import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户名
    userName: ''
  },
  mutations: {
    /**
     * 设置用户名
     *
     */
    setUserName: function (state, payload) {
      state.userName = payload.val
    }
  },
  getters: {
    getUserName: function (state, getters) {
      return state.userName
    }
  }
})
